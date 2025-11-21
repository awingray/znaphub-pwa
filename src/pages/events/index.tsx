import { EventListQueryOptions } from "@/api/events/queries";
import Each from "@/components/flow/each";
import { useQuery } from "@tanstack/react-query";
import EventHeader from "./components/event-header";
import EventCard from "./components/event-card";
import { useState } from "react";
import EventCreateDialog from "./components/event-create-dialog";
import EventCreateFallback from "./components/event-create-fallback";
import Match from "@/components/flow/match";
import { Switch } from "@/components/flow/switch";
import EventListSkeleton from "./components/event-list-skeleton";
import useEventList from "./hooks/use-event-list";

export default function EventsComponent() {
	const {
		data,
		isFetching,
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
		hasData,
	} = useEventList();

	return (
		<div>
			<EventHeader onCreate={handleOpenCreateDialog} showCreate={hasData} />
			<EventCreateDialog
				open={openCreateDialog}
				onOpenChange={setOpenCreateDialog}
			/>
			<Switch>
				<Match when={isFetching}>
					<EventListSkeleton />
				</Match>
				<Match when={hasData}>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Each
							of={data}
							render={(event) => <EventCard key={event.id} event={event} />}
						/>
					</div>
				</Match>
				<Match>
					<EventCreateFallback onCreate={handleOpenCreateDialog} />
				</Match>
			</Switch>
		</div>
	);
}
