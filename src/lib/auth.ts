import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const AUTH_URL = import.meta.env.VITE_AUTHENTIK_URL;
const CLIENT_ID = import.meta.env.VITE_AUTHENTIK_CLIENT_ID;
const APPLICATION_NAME = import.meta.env.VITE_AUTHENTIK_APPLICATION;
const REDIRECT_URI = import.meta.env.VITE_AUTHENTIK_REDIRECT_URI;
const SILENT_REDIRECT_URI = import.meta.env.VITE_AUTHENTIK_SILENT_REDIRECT_URI;
const POST_LOGOUT_URI = import.meta.env.VITE_AUTHENTIK_POST_LOGOUT_URI;

const userManager = new UserManager({
	authority: `${AUTH_URL}/application/o/${APPLICATION_NAME}/`,
	client_id: CLIENT_ID,
	redirect_uri: REDIRECT_URI,
	post_logout_redirect_uri: POST_LOGOUT_URI,
	silent_redirect_uri: SILENT_REDIRECT_URI,
	response_type: "code",
	scope: "openid profile email",
	userStore: new WebStorageStateStore({ store: window.sessionStorage }),
	automaticSilentRenew: true,
});

export const startLogin = async (state?: Record<string, string>) =>
	await userManager.signinRedirect({ state });

export const completeLogin = async () =>
	await userManager.signinRedirectCallback();

export const signInSilentCallback = () =>
	userManager.signinSilentCallback().catch(console.error);

export const startLogout = async () => await userManager.signoutRedirect();

export const getCurrentToken = async (): Promise<string | undefined> => {
	let user = await userManager.getUser();
	if (!user) return undefined;
	if (user.expired) user = await userManager.signinSilent().catch(() => null);
	return user?.access_token;
};

export const registerSilentRenewEvent = async (
	cb: (token: string | undefined) => void,
) => {
	userManager.events.addAccessTokenExpired(async () => {
		const user = await userManager.signinSilent().catch(() => null);
		cb(user?.access_token);
	});
};
