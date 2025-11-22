import { EventPhotosQueryOptions } from "@/api/events/queries";
import { ROUTES } from "@/constants/routes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

export default function useEventPhotos() {
	const { eventId } = useParams({ from: ROUTES.AUTH.EVENTS.PHOTOS });
	const { data, isFetching } = useQuery(EventPhotosQueryOptions(eventId));
	return {
		eventId,
		data,
		isFetching,
	};
}
