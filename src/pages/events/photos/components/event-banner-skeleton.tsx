import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EventBannerSkeleton() {
	console.log("rendered");
	return (
		<Card className="mb-6 p-4">
			<div className="flex items-start justify-between">
				<div className="space-y-2 w-full max-w-sm">
					<Skeleton className="h-6 w-32" />
					<Skeleton className="h-4 w-48" />
				</div>

				<Skeleton className="h-8 w-16 rounded-md" />
			</div>
		</Card>
	);
}
