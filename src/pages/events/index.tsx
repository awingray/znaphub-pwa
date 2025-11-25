import EventHeader from "./components/event-header";
import EventCreateDialog from "./components/event-create-dialog";
import EventCreateFallback from "./components/event-create-fallback";
import useEventList from "./hooks/use-event-list";
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
			<Show
				when={hasData}
				fallback={<EventCreateFallback onCreate={handleOpenCreateDialog} />}
			>
				<EventGrid events={data} />
			</Show>
		</div>
	);
}
