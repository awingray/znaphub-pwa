import { EventListQueryOptions } from "@/api/events/queries";
import Each from "@/components/flow/each";
import { Show } from "@/components/flow/show";
import { useQuery } from "@tanstack/react-query";
import EventForm from "./forms/event-form";

export default function EventListComponent() {
	const { data } = useQuery(EventListQueryOptions());

	return (
		<div>
			Hello "/_auth/events"!
			<Show.When condition={!!data && data.length > 0}>
				<Each of={data!} render={(event) => event.name} />
			</Show.When>
			<EventForm />
		</div>
	);
}
