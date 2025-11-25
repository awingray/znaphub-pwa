import type { EventList } from "@/api/events/schemas";
import Each from "@/components/flow/each";
import EventCard from "./event-card";

interface EventGridProps {
	events: EventList;
}

export default function EventGrid({ events }: EventGridProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<Each
				of={events}
				render={(event) => <EventCard key={event.id} event={event} />}
			/>
		</div>
	);
}
