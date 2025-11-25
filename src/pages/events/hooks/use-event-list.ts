import { EventListQueryOptions } from "@/api/events/queries";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useEventList() {
	const { data } = useSuspenseQuery(EventListQueryOptions());
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const handleOpenCreateDialog = () => setOpenCreateDialog(true);
	const hasData = !!data?.length;

	return {
		data,
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
		hasData,
	};
}
