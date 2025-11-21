export const ENDPOINTS = {
	EVENTS: {
		LIST: "/events",
		DETAIL: (id: string) => `/events/${id}`,
		CREATE: "/events",
		PHOTOS: (id: string) => `/events/${id}/photos`,
	},
	QRCODES: {
		CREATE: "/qrcodes",
	},
	PHOTOS: {
		CREATE: (shortId: string) => `/photos/${shortId}`,
	},
} as const;
