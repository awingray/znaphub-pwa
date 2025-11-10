import { Button } from "@/components/ui/button";

interface EventsHeaderProps {
	onCreate: () => void;
}

export default function EventsHeader({ onCreate }: EventsHeaderProps) {
	return (
		<div className="flex items-center justify-between mb-6">
			<div>
				<h2 className="text-2xl font-semibold">Events</h2>
				<p className="text-sm text-muted-foreground">
					Manage your events and guest QR codes
				</p>
			</div>

			<div>
				<Button size="sm" onClick={onCreate}>
					Create Event
				</Button>
			</div>
		</div>
	);
}
