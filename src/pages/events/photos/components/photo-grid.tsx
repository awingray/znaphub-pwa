import Each from "@/components/flow/each";
import PhotoCard from "./photo-card";
import type { PhotoList } from "@/api/events/schemas";

interface PhotoGridProps {
	photos: PhotoList;
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
	return (
		<div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
			<Each
				of={photos}
				render={(photo) => <PhotoCard photo={photo} key={photo.id} />}
			/>
		</div>
	);
}
