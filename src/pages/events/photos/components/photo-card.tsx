import type { Photo } from "@/api/events/schemas";
import { Card } from "@/components/ui/card";

export default function PhotoCard({ photo }: { photo: Photo }) {
	return (
		<Card className="overflow-hidden">
			<img
				src={photo.url}
				alt={photo.fileName}
				className="w-full h-40 object-cover"
			/>
		</Card>
	);
}
