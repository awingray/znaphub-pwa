import { queryOptions } from "@tanstack/react-query";
import { eventQueries } from "./query-factory";
import { api } from "@/api/api-client";
import { ENDPOINTS } from "../endpoints";
import { eventListschema } from "./schemas";

export const EventListQueryOptions = () =>
	queryOptions({
		queryKey: eventQueries.all(),
		queryFn: async () => {
			const response = await api.get(ENDPOINTS.EVENTS.LIST);
			return eventListschema.parse(response);
		}
	});
