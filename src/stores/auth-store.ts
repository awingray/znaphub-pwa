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
				set({ isAuthenticated: !!token, isInitialized: true, token });
			},
			login: (redirect) => {
				const state = redirect ? { redirect } : undefined;
				startLogin(state);
			},
			logout: () => {
				set({ isAuthenticated: false, token: undefined });
				startLogout();
			},
		}),
		{ name: "auth-store" },
	),
);

userManager.events.addAccessTokenExpiring(async () => {
	try {
		const user = await userManager.signinSilent();
		useAuthStore.setState({
			isAuthenticated: !!user,
			token: user?.access_token,
		});
	} catch {
		useAuthStore.setState({
			isAuthenticated: false,
			token: undefined,
		});
	}
});
