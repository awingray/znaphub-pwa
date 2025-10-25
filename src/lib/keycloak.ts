import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
	url: import.meta.env.VITE_KEYCLOAK_URL,
	realm: import.meta.env.VITE_KEYCLOAK_REALM,
	clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

export const initKeycloak = async () => {
	return await keycloak.init({
		onLoad: "check-sso",
		pkceMethod: "S256",
	});
};
