import { useCreateQrCode } from "@/api/qrcodes/mutations";
import { useState } from "react";

export default function useEventCard(id: string) {
	const { mutate, data, isPending } = useCreateQrCode();
	const handleCreateQrCode = () => {
		mutate(
			{ eventId: id },
			{
				onSuccess: () => {
					setOpenQrDialog(true);
				},
			},
		);
	};
	const [openQrDialog, setOpenQrDialog] = useState(false);

	return {
		data,
		isPending,
		handleCreateQrCode,
		openQrDialog,
		setOpenQrDialog,
	};
}
