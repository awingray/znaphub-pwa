export const ROUTES = {
	HOME: "/",
	EVENTS: "/events",
	PHOTOS: "/events/$eventId/photos",
	CALLBACK: "/callback",
	UPLOAD: "/upload/$shortId",
	AUTH: {
		BASE: "/_auth",
		EVENTS: { BASE: "/_auth/events", PHOTOS: "/_auth/events/$eventId/photos" },
	},
} as const;
