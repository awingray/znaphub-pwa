import { EventListQueryOptions } from "@/api/events/queries";
import Each from "@/components/flow/each";
import { Show } from "@/components/flow/show";
import { useQuery } from "@tanstack/react-query";

export default function EventsComponent() {
	const { data } = useQuery(EventListQueryOptions());
	return (
		<div>
			<Show.When condition={!!data.length}>
				<Each of={data} render={(event) => event.name} />
			</Show.When>
		</div>
	);
}
