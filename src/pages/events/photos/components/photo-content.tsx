import Show from "@/components/flow/show";
import useEventPhotos from "../hooks/use-event-photos";
import PhotoFallback from "./photo-fallback";
import PhotoGrid from "./photo-grid";

export default function PhotoContent() {
	const { data } = useEventPhotos();
	return (
		<Show when={!!data?.length} fallback={<PhotoFallback />}>
			<PhotoGrid photos={data} />
		</Show>
	);
}
