import useEventPhotos from "./hooks/use-event-photos";
import PhotoFallback from "./components/photo-fallback";
import PhotoGrid from "./components/photo-grid";
import Show from "@/components/flow/show";

export default function EventPhotosComponent() {
	const { data } = useEventPhotos();
	return (
		<Show when={!!data?.length} fallback={<PhotoFallback />}>
			<PhotoGrid photos={data} />
		</Show>
	);
}
