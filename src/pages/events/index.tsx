import { EventListQueryOptions } from "@/api/events/queries";
import Each from "@/components/flow/each";
import { Show } from "@/components/flow/show";
import { useQuery } from "@tanstack/react-query";
import EventHeader from "./components/event-header";
import EventCard from "./components/event-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCreateDialog from "./components/event-create-dialog";

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
			<Show>
				<Show.When condition={hasData}>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Each
							of={data}
							render={(event) => <EventCard key={event.id} event={event} />}
						/>
					</div>
				</Show.When>
				<Show.Else>
					<div className="rounded-lg border bg-panel p-6 text-center">
						<p className="text-lg font-medium">No events yet</p>
						<p className="mt-2 text-sm text-muted-foreground">
							Create your first event to get started
						</p>
						<div className="mt-4">
							<Button onClick={handleOpenCreateDialog}>Create Event</Button>
						</div>
					</div>
				</Show.Else>
			</Show>
		</div>
	);
}
