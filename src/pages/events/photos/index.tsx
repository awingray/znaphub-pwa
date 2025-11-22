import useEventPhotos from "./hooks/use-event-photos";
import Match from "@/components/flow/match";
import { Switch } from "@/components/flow/switch";
import PhotoFallback from "./components/photo-fallback";
import PhotoSkeleton from "./components/photo-skeleton";
import PhotoGrid from "./components/photo-grid";

export default function EventPhotosComponent() {
	const { data, isFetching } = useEventPhotos();
	return (
		<Switch>
			<Match when={isFetching}>
				<PhotoSkeleton />
			</Match>
			<Match when={!!data?.length}>
				<PhotoGrid photos={data} />
			</Match>
			<Match>
				<PhotoFallback />
			</Match>
		</Switch>
	);
}
