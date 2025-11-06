export const ENDPOINTS = {
	EVENTS: {
		LIST: "/event",
		DETAIL: (id: string) => `/event/${id}`,
		CREATE: "/event",
	},
} as const;
