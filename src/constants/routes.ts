export const ROUTES = {
	HOME: "/",
	CALLBACK: "/callback",

	UPLOAD: "/upload/$shortId",

	EVENTS: {
		LIST: "/events",
		DETAIL: "/events/$eventId",
		PHOTOS: "/events/$eventId/photos",
	},

	INTERNAL: {
		AUTH: "/_auth",
		EVENTS: {
			LIST: "/_auth/events",
			INDEX: "/_auth/events/",
			DETAIL: "/_auth/events/$eventId",
			PHOTOS: "/_auth/events/$eventId/photos",
		},
	},
} as const;
