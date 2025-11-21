/** biome-ignore-all lint/suspicious/noExplicitAny: api client */

import { HttpMethods } from "@/constants/http-methods";
import { getCurrentToken } from "@/lib/auth";
import { useAuthStore } from "@/stores/auth-store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class ApiError extends Error {
	constructor(
		public status: number,
		public statusText: string,
		public data?: any,
	) {
		super(`${status}: ${statusText}`);
		this.name = "ApiError";
	}
}

interface RequestConfig extends RequestInit {
	params?: Record<string, any>;
	skipAuth?: boolean;
}

class ApiClient {
	constructor(private baseURL: string) {}

	private async request<T>(
		endpoint: string,
		config: RequestConfig = {},
	): Promise<T> {
		const { params, skipAuth = false, ...fetchConfig } = config;
		const url = new URL(`${this.baseURL}${endpoint}`);

		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					url.searchParams.append(key, String(value));
				}
			});
		}

		const headers: Record<string, string> = {
			"Content-Type": "application/json",
		};

		if (!skipAuth) {
			try {
				const token = await getCurrentToken();
				if (token) {
					headers.Authorization = `Bearer ${token}`;
				}
			} catch (error) {
				console.error("Token refresh failed:", error);
				useAuthStore.getState().logout();
				throw new ApiError(401, "Unauthorized", "Session expired");
			}
		}

		Object.assign(headers, fetchConfig.headers);

		const response = await fetch(url.toString(), {
			...fetchConfig,
			headers,
		});

		if (!response.ok) {
			const data = await response.json().catch(() => ({}));
			if (response.status === 401) {
				useAuthStore.getState().logout();
			}

			throw new ApiError(response.status, response.statusText, data);
		}

		if (response.status === 204) return {} as T;

		return response.json().catch(() => ({}) as T);
	}

	get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
		return this.request<T>(endpoint, { ...config, method: HttpMethods.GET });
	}

	post<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<T> {
		return this.request<T>(endpoint, {
			...config,
			method: HttpMethods.POST,
			body: JSON.stringify(data),
		});
	}

	put<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<T> {
		return this.request<T>(endpoint, {
			...config,
			method: HttpMethods.PUT,
			body: JSON.stringify(data),
		});
	}

	patch<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<T> {
		return this.request<T>(endpoint, {
			...config,
			method: HttpMethods.PATCH,
			body: JSON.stringify(data),
		});
	}

	delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
		return this.request<T>(endpoint, { ...config, method: HttpMethods.DELETE });
	}
}

export const api = new ApiClient(API_BASE_URL);
