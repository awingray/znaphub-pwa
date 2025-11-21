import { EventListQueryOptions } from "@/api/events/queries";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useEventList() {
	const { data, isFetching } = useQuery(EventListQueryOptions());
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const handleOpenCreateDialog = () => setOpenCreateDialog(true);
	const hasData = !!data?.length;

	return {
		data,
		isFetching,
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
		hasData,
	};
}
