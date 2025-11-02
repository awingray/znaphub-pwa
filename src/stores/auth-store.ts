import { create } from "zustand";
import {
	startLogin,
	startLogout,
	getCurrentToken,
	userManager,
} from "@/lib/auth";
import { persist } from "zustand/middleware";

interface AuthState {
	isAuthenticated: boolean;
	isInitialized: boolean;
	token?: string;

	initialize: () => Promise<void>;
	login: (redirect?: string) => void;
	logout: () => void;

	setToken: (token?: string) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			isAuthenticated: false,
			isInitialized: false,
			token: undefined,
			initialize: async () => {
				if (get().isInitialized) return;

				const token = await getCurrentToken();
				get().setToken(token);
			},
			login: (redirect) => {
				const state = redirect ? { redirect } : undefined;
				startLogin(state);
			},
			logout: () => {
				get().setToken();
				startLogout();
			},
			setToken: (token) =>
				set({
					isAuthenticated: !!token,
					isInitialized: true,
					token,
				}),
		}),
		{ name: "auth-store" },
	),
);

userManager.events.addAccessTokenExpiring(async () => {
	const user = await userManager.signinSilent().catch(() => null);
	useAuthStore.getState().setToken(user?.access_token);
});
