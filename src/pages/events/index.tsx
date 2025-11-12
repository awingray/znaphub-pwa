import { EventListQueryOptions } from "@/api/events/queries";
import Each from "@/components/flow/each";
import { Show } from "@/components/flow/show";
import { useQuery } from "@tanstack/react-query";
import EventHeader from "./components/event-header";
import EventCard from "./components/event-card";
import { useState } from "react";
import EventCreateDialog from "./components/event-create-dialog";
import EventCreateFallback from "./components/event-create-fallback";

export default function EventsComponent() {
	const { data } = useQuery(EventListQueryOptions());
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const handleOpenCreateDialog = () => setOpenCreateDialog(true);
	const hasData = !!data.length;
	return (
		<div>
			<EventHeader onCreate={handleOpenCreateDialog} showCreate={hasData} />
			<EventCreateDialog
				open={openCreateDialog}
				onOpenChange={setOpenCreateDialog}
			/>
			<Show
				when={hasData}
				fallback={<EventCreateFallback onCreate={handleOpenCreateDialog} />}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<Each
						of={data}
						render={(event) => <EventCard key={event.id} event={event} />}
					/>
				</div>
			</Show>
		</div>
	);
}
