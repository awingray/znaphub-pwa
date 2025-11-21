import { queryOptions } from "@tanstack/react-query";
import { eventQueries } from "./query-factory";
import { api } from "@/api/api-client";
import { ENDPOINTS } from "../endpoints";
import { eventListSchema, eventSchema, photoListSchema } from "./schemas";

export const EventListQueryOptions = () =>
	queryOptions({
		queryKey: eventQueries.all(),
		queryFn: async () => {
			const response = await api.get(ENDPOINTS.EVENTS.LIST);
			return eventListSchema.parse(response);
		},
		initialData: [],
	});

export const EventDetailQueryOptions = (id: string) =>
	queryOptions({
		queryKey: eventQueries.detail(id),
		queryFn: async () => {
			const response = await api.get(ENDPOINTS.EVENTS.DETAIL(id));
			return eventSchema.parse(response);
		},
	});

export const EventPhotosQueryOptions = (id: string) =>
	queryOptions({
		queryKey: eventQueries.photos(id),
		queryFn: async () => {
			const response = await api.get(ENDPOINTS.EVENTS.PHOTOS(id));
			return photoListSchema.parse(response);
		},
		initialData: [],
	});
