import { useState } from "react";

export function useEventListLayout() {
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const handleOpenCreateDialog = () => setOpenCreateDialog(true);
	const [hasData, setHasData] = useState(false);

	return {
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
		hasData,
		setHasData,
	};
}
