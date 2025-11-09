export const ENDPOINTS = {
	EVENTS: {
		LIST: "/events",
		DETAIL: (id: string) => `/events/${id}`,
		CREATE: "/events",
	},
} as const;
