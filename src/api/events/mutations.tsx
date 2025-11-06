import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api-client";
import { ENDPOINTS } from "../endpoints";
import { createEventSchema, type CreateEventPayload } from "./schemas";
import { eventQueries } from "./query-factory";

const createEvent = async (event: CreateEventPayload) => {
	const payload = createEventSchema.parse(event);
	const response = await api.post(ENDPOINTS.EVENTS.CREATE, payload);
	return response;
};

export const useCreateEvent = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (payload: CreateEventPayload) => createEvent(payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: eventQueries.all() });
		},
	});
};
