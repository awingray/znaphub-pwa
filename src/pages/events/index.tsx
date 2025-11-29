import EventHeader from "./components/event-header";
import EventCreateDialog from "./dialogs/event-create-dialog";
import EventListSection from "./components/event-list/event-list-section";
import { Suspense } from "react";
import EventListSkeleton from "./components/event-list/event-list-skeleton";
import { useEventListLayout } from "./hooks/use-event-list-layout";

export default function EventsComponent() {
	const { openCreateDialog, setOpenCreateDialog, handleOpenCreateDialog } =
		useEventListLayout();

	return (
		<section>
			<EventHeader onCreate={handleOpenCreateDialog} />
			<EventCreateDialog
				open={openCreateDialog}
				onOpenChange={setOpenCreateDialog}
			/>
			<Suspense fallback={<EventListSkeleton />}>
				<EventListSection onCreate={handleOpenCreateDialog} />
			</Suspense>
		</section>
	);
}
