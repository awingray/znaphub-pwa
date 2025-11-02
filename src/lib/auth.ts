import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const AUTH_URL = import.meta.env.VITE_AUTHENTIK_URL;
const CLIENT_ID = import.meta.env.VITE_AUTHENTIK_CLIENT_ID;
const APPLICATION_NAME = import.meta.env.VITE_AUTHENTIK_APPLICATION;
const REDIRECT_URI = import.meta.env.VITE_AUTHENTIK_REDIRECT_URI;
const SILENT_REDIRECT_URI = import.meta.env.VITE_AUTHENTIK_SILENT_REDIRECT_URI;
const POST_LOGOUT_URI = import.meta.env.VITE_AUTHENTIK_POST_LOGOUT_URI;

export const userManager = new UserManager({
	authority: `${AUTH_URL}/application/o/${APPLICATION_NAME}/`,
	client_id: CLIENT_ID,
	redirect_uri: REDIRECT_URI,
	post_logout_redirect_uri: POST_LOGOUT_URI,
	silent_redirect_uri: SILENT_REDIRECT_URI,
	response_type: "code",
	scope: "openid profile email",
	userStore: new WebStorageStateStore({ store: window.localStorage }),
	automaticSilentRenew: true,
});

export const initAuth = async (): Promise<boolean> => {
	try {
		const user = await userManager.getUser();
		return !!user && !user.expired;
	} catch {
		return false;
	}
};

export const startLogin = async (state?: Record<string, string>) => {
	await userManager.signinRedirect({ state });
};

export const completeLogin = async () => {
	const user = await userManager.signinRedirectCallback();
	return user;
};

export const startLogout = async () => {
	await userManager.signoutRedirect();
};

export const getCurrentToken = async (): Promise<string | undefined> => {
	let user = await userManager.getUser();
	if (!user) return undefined;
	if (user.expired) {
		try {
			user = await userManager.signinSilent();
		} catch (err) {
			console.warn("Silent refresh failed:", err);
			return undefined;
		}
	}

	return user?.access_token;
};
