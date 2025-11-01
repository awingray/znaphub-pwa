import { create } from "zustand";
import { initAuth, startLogin, startLogout, getCurrentToken } from "@/lib/auth";

interface AuthState {
	isAuthenticated: boolean;
	isInitialized: boolean;
	token?: string;
	initialize: () => Promise<void>;
	login: (redirect?: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	isInitialized: false,
	token: undefined,

	initialize: async () => {
		const ok = await initAuth();
		const token = await getCurrentToken();
		set({ isAuthenticated: ok, isInitialized: true, token });
	},

	login: (redirect) => {
		const state = redirect ? { redirect } : undefined;
		startLogin(state);
	},

	logout: () => {
		set({ isAuthenticated: false, token: undefined });
		startLogout();
	},
}));
