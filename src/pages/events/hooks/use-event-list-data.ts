import { useSuspenseQuery } from "@tanstack/react-query";
import { EventListQueryOptions } from "@/api/events/queries";

export default function useEventListData() {
	const { data } = useSuspenseQuery(EventListQueryOptions());
	const hasData = !!data.length;
	return {
		data,
		hasData,
	};
}
