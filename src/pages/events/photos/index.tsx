import PhotoContent from "./components/photo-content";
import { Suspense } from "react";
import PhotoSkeleton from "./components/photo-skeleton";
import EventBannerCard from "./components/event-banner-card";
import EventBannerSkeleton from "./components/event-banner-skeleton";

export default function EventPhotosComponent() {
	return (
		<>
			<Suspense fallback={<EventBannerSkeleton />}>
				<EventBannerCard />
			</Suspense>
			<Suspense fallback={<PhotoSkeleton />}>
				<PhotoContent />
			</Suspense>
		</>
	);
}
