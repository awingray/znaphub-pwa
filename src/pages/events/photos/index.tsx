import useEventPhotos from "./hooks/use-event-photos";
import Match from "@/components/flow/match";
import { Switch } from "@/components/flow/switch";
import PhotoFallback from "./components/photo-fallback";
import PhotoSkeleton from "./components/photo-skeleton";
import PhotoGrid from "./components/photo-grid";
import { Suspense } from "react";
import Show from "@/components/flow/show";

export default function EventPhotosComponent() {
	const { data } = useEventPhotos();
	return (
		<Suspense fallback={<PhotoSkeleton />}>
			<Show when={!!data?.length} fallback={<PhotoFallback />}>
				<PhotoGrid photos={data} />
			</Show>
		</Suspense>
	);
}
