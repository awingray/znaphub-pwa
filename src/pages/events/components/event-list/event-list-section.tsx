import useEventListData from "../../hooks/use-event-list-data";
import Show from "@/components/flow/show";
import EventGrid from "./event-list-grid";
import EventListFallback from "./event-list-fallback";

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
		<Show when={hasData} fallback={<EventListFallback onCreate={onCreate} />}>
			<EventGrid events={data} />
		</Show>
	);
}
