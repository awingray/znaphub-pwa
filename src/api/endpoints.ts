export const ENDPOINTS = {
	EVENTS: {
		LIST: "/events",
		DETAIL: (id: string) => `/events/${id}`,
		CREATE: "/events",
	},
	QRCODES: {
		CREATE: "/qrcodes",
	},
} as const;
