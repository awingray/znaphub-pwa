import { ROUTES } from "@/constants/routes";
import EventPhotosComponent from "@/pages/events/photos";
import PhotoSkeleton from "@/pages/events/photos/components/photo-skeleton";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createLazyFileRoute(ROUTES.INTERNAL.EVENTS.PHOTOS)({
	component: () => (
		<Suspense fallback={<PhotoSkeleton />}>
			<EventPhotosComponent />
		</Suspense>
	),
});
