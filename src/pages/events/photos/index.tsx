import Show from "@/components/flow/show";
import useEventPhotos from "./hooks/use-event-photos";
import PhotoCard from "./components/photo-card";
import Each from "@/components/flow/each";

export default function EventPhotosComponent() {
	const { data, isFetching, eventId } = useEventPhotos();
	console.log(eventId);
	return (
		<div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
			<Show when={!!data} fallback={<>Loading</>}>
				<Each
					of={data}
					render={(photo) => <PhotoCard photo={photo} key={photo.id} />}
				/>
			</Show>
		</div>
	);
}
