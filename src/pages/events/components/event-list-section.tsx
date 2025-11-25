import useEventListData from "../hooks/use-event-list-data";
import Show from "@/components/flow/show";
import EventGrid from "./event-grid";
import EventCreateFallback from "./event-create-fallback";

interface EventListSectionProps {
	onCreate: () => void;
	onData: (hasData: boolean) => void;
}

export default function EventListSection({
	onCreate,
	onData,
}: EventListSectionProps) {
	const { data, hasData } = useEventListData();
	onData(hasData);
	return (
		<Show when={hasData} fallback={<EventCreateFallback onCreate={onCreate} />}>
			<EventGrid events={data} />
		</Show>
	);
}
