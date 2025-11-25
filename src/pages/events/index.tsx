import EventHeader from "./components/event-header";
import EventCreateDialog from "./components/event-create-dialog";
import EventListSection from "./components/event-list-section";
import { Suspense } from "react";
import EventListSkeleton from "./components/event-list-skeleton";
import { useEventListLayout } from "./hooks/use-event-list-layout";

export default function EventsComponent() {
	const {
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
		hasData,
		setHasData,
	} = useEventListLayout();

	return (
		<section>
			<EventHeader onCreate={handleOpenCreateDialog} showCreate={hasData} />
			<EventCreateDialog
				open={openCreateDialog}
				onOpenChange={setOpenCreateDialog}
			/>
			<Suspense fallback={<EventListSkeleton />}>
				<EventListSection
					onCreate={handleOpenCreateDialog}
					onData={setHasData}
				/>
			</Suspense>
		</section>
	);
}
