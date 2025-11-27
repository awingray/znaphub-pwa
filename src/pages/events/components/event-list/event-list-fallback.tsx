import { Button } from "@/components/ui/button";

interface EventCreateFallbackProps {
	onCreate: () => void;
}

export default function EventCreateFallback({
	onCreate,
}: EventCreateFallbackProps) {
	return (
		<div className="rounded-lg border bg-panel p-6 text-center">
			<p className="text-lg font-medium">No events yet</p>
			<p className="mt-2 text-sm text-muted-foreground">
				Create your first event to get started
			</p>
			<div className="mt-4">
				<Button onClick={onCreate}>Create Event</Button>
			</div>
		</div>
	);
}
