import { useCreateQrCode } from "@/api/qrcodes/mutations";
import { useState } from "react";

export default function useEventCard(id: string) {
	const { mutate, data, isPending } = useCreateQrCode();
	const [openQrDialog, setOpenQrDialog] = useState(false);
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

	return {
		data,
		isPending,
		handleCreateQrCode,
		openQrDialog,
		setOpenQrDialog,
	};
}
