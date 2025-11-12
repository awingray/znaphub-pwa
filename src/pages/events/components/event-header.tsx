import { Show } from "@/components/flow/show";
import { Button } from "@/components/ui/button";

interface EventsHeaderProps {
	onCreate: () => void;
	showCreate: boolean;
}

export default function EventHeader({
	onCreate,
	showCreate = true,
}: EventsHeaderProps) {
	return (
		<div className="flex items-center justify-between mb-6">
			<div>
				<h2 className="text-2xl font-semibold">Events</h2>
				<p className="text-sm text-muted-foreground">
					Manage your events and guest QR codes
				</p>
			</div>

			<Show when={showCreate}>
				<Button size="sm" onClick={onCreate}>
					Create Event
				</Button>
			</Show>
		</div>
	);
}
