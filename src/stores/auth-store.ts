import { create } from "zustand";
import { keycloak, initKeycloak } from "@/lib/keycloak";

interface AuthState {
	isAuthenticated: boolean;
	isInitialized: boolean;
	token: string | undefined;

	initialize: () => Promise<void>;
	login: () => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	isInitialized: false,
	token: undefined,

	initialize: async () => {
		const authenticated = await initKeycloak();

		set({
			isAuthenticated: authenticated,
			isInitialized: true,
			token: keycloak.token,
		});

		keycloak.onTokenExpired = () => {
			keycloak.updateToken(30).then(() => {
				set({ token: keycloak.token });
			});
		};
	},
	login: () => {
		keycloak.login();
	},
	logout: () => {
		set({ isAuthenticated: false, token: undefined });
		keycloak.logout();
	},
}));
