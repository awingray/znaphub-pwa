import UploadCard from "./components/upload-card";
import { useUploadPhoto } from "./hooks/use-upload-photo";

export default function UploadComponent() {
	const { shortId, handleFileInput, handleUpload } = useUploadPhoto();
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
