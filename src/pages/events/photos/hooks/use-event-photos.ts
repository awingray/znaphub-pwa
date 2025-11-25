import { EventPhotosQueryOptions } from "@/api/events/queries";
import { ROUTES } from "@/constants/routes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

export default function useEventPhotos() {
	const { eventId } = useParams({ from: ROUTES.INTERNAL.EVENTS.PHOTOS });
	const { data } = useQuery(EventPhotosQueryOptions(eventId));
	return {
		eventId,
		data,
	};
}
