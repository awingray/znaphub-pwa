import { useState } from "react";

export function useEventListLayout() {
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const handleOpenCreateDialog = () => setOpenCreateDialog(true);

	return {
		openCreateDialog,
		setOpenCreateDialog,
		handleOpenCreateDialog,
	};
}
