import PhotoContent from "./components/photo-content";
import { Suspense } from "react";
import PhotoSkeleton from "./components/photo-skeleton";

export default function EventPhotosComponent() {
	return (
		<Suspense fallback={<PhotoSkeleton />}>
			<PhotoContent />
		</Suspense>
	);
}
