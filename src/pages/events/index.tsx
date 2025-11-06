import { useCreateEvent } from "@/api/events/mutations";
import { EventListQueryOptions } from "@/api/events/queries";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function EventListComponent() {
	const { data } = useQuery(EventListQueryOptions());

	return <div>Hello "/_auth/events"!</div>;
}
