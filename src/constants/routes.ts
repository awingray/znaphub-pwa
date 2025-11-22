export const ROUTES = {
	HOME: "/",
	CALLBACK: "/callback",

	UPLOAD: "/upload/$shortId",

	EVENTS: {
		LIST: "/events",
		PHOTOS: "/events/$eventId/photos",
	},

	INTERNAL: {
		AUTH: "/_auth",
		EVENTS: {
			LIST: "/_auth/events",
			INDEX: "/_auth/events/",
			PHOTOS: "/_auth/events/$eventId/photos",
		},
	},
} as const;
