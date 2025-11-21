import { useState, type ChangeEvent } from "react";
import { useParams } from "@tanstack/react-router";
import { ROUTES } from "@/constants/routes";
import { useCreatePhoto } from "@/api/photos/mutations";

export function useUploadPhoto() {
	const { shortId } = useParams({ from: ROUTES.UPLOAD });
	const [file, setFile] = useState<File | null>(null);
	const { mutate, isPending, error } = useCreatePhoto();

	const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files ? e.target.files[0] : null);
	};

	const handleUpload = () => {
		if (!file) return;
		mutate({ shortId, file });
	};

	return {
		shortId,
		handleFileInput,
		handleUpload,
		isPending,
		error,
	};
}
