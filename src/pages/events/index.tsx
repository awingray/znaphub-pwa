import Each from "@/components/flow/each";
import EventHeader from "./components/event-header";
import EventCard from "./components/event-card";
import EventCreateDialog from "./components/event-create-dialog";
import EventCreateFallback from "./components/event-create-fallback";
import Match from "@/components/flow/match";
import { Switch } from "@/components/flow/switch";
import EventListSkeleton from "./components/event-list-skeleton";
import useEventList from "./hooks/use-event-list";
import { Suspense } from "react";
import Show from "@/components/flow/show";
import EventGrid from "./components/event-grid";

export default function EventsComponent() {
	const {
		data,
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
			<Suspense fallback={<EventListSkeleton />}>
				<Show
					when={hasData}
					fallback={<EventCreateFallback onCreate={handleOpenCreateDialog} />}
				>
					<EventGrid events={data} />
				</Show>
			</Suspense>
		</div>
	);
}
