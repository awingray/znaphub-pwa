export const ROUTES = {
	HOME: "/",
	EVENTS: "/events",
	CALLBACK: "/callback",
	UPLOAD: "/upload/$shortId",
	AUTH: {
		BASE: "/_auth",
		EVENTS: "/_auth/events",
	},
} as const;
