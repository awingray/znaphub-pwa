import { EventListQueryOptions } from "@/api/events/queries";
import { useQuery } from "@tanstack/react-query";

export default function EventListComponent() {
	const { data } = useQuery(EventListQueryOptions());

	return <div>Hello "/_auth/events"!</div>;
}
