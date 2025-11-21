import { useParams } from "@tanstack/react-router";
import { ROUTES } from "@/constants/routes";
import { useState, type ChangeEvent } from "react";
import UploadCard from "./components/upload-card";
import { useCreatePhoto } from "@/api/photos/mutations";

export default function UploadComponent() {
	const { shortId } = useParams({ from: ROUTES.UPLOAD });
	const [file, setFile] = useState<File | null>(null);
	const { mutate } = useCreatePhoto();

	const handleFileInput = (e: ChangeEvent<HTMLInputElement>) =>
		setFile(e.target.files ? e.target.files[0] : null);

	const handleUpload = () => {
		if (!file) return;
		mutate({ shortId, file });
	};

	return (
		<div className="min-h-screen p-4 flex items-center justify-center">
			<UploadCard
				shortId={shortId}
				onFileInput={handleFileInput}
				onUpload={handleUpload}
			/>
		</div>
	);
}
