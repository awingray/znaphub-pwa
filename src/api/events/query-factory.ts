export const eventQueries = {
	all: () => ["events"] as const,
	detail: (id: string) => [...eventQueries.all(), id] as const,
	photos: (id: string) => [...eventQueries.detail(id), "photos"] as const,
};
