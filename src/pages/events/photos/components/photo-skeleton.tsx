import Each from "@/components/flow/each";
import { Skeleton } from "@/components/ui/skeleton";

export default function PhotoSkeleton() {
	return (
		<div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
			<Each
				of={Array.from({ length: 8 })}
				render={(_, i) => (
					<Skeleton key={i} className="w-full h-40 rounded-md" />
				)}
			/>
		</div>
	);
}
