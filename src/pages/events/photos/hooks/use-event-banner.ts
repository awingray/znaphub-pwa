import { EventDetailQueryOptions } from "@/api/events/queries";
import { ROUTES } from "@/constants/routes";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "@tanstack/react-router";

export default function useEventBanner() {
	const { history } = useRouter();
	const { eventId } = useParams({ from: ROUTES.INTERNAL.EVENTS.PHOTOS });
	const { data: event } = useSuspenseQuery(EventDetailQueryOptions(eventId));
	return {
		history,
		event,
	};
}
