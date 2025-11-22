import Show from "@/components/flow/show";
import useEventPhotos from "./hooks/use-event-photos";
import PhotoCard from "./components/photo-card";
import Each from "@/components/flow/each";
import Match from "@/components/flow/match";
import { Switch } from "@/components/flow/switch";
import PhotoFallback from "./components/photo-fallback";
import PhotoSkeleton from "./components/photo-skeleton";

export default function EventPhotosComponent() {
	const { data, isFetching } = useEventPhotos();
	return (
		<Switch>
			<Match when={isFetching}>
				<PhotoSkeleton />
			</Match>
			<Match when={!!data?.length}>
				<div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
					<Each
						of={data}
						render={(photo) => <PhotoCard photo={photo} key={photo.id} />}
					/>
				</div>
			</Match>
			<Match>
				<PhotoFallback />
			</Match>
		</Switch>
	);
}
