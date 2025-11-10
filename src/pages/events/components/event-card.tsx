import type { Event } from "@/api/events/schemas";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

interface EventCardProps {
	event: Event;
	onOpen?: (event: Event) => void;
}

export default function EventCard({ event, onOpen }: EventCardProps) {
	return (
		<Card className="flex flex-col justify-between h-full">
			<CardHeader>
				<CardTitle className="text-lg line-clamp-1">{event.name}</CardTitle>
			</CardHeader>

			<CardContent className="text-sm text-muted-foreground grow">
				<p className="line-clamp-3 break-words">
					{event.description ?? "No description"}
				</p>
				<div className="mt-3 text-xs text-muted-foreground">
					<div>
						Slug: <span className="font-medium">{event.slug}</span>
					</div>
					<div>Public: {event.isPublic ? "Yes" : "No"}</div>
					<div className="mt-1 text-xs text-slate-400">
						Created: {new Date(event.createdAt).toLocaleString()}
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<Button size="sm" variant="ghost" onClick={() => onOpen?.(event)}>
					View
				</Button>
				<Button
					size="sm"
					onClick={() =>
						navigator.clipboard?.writeText(`${location.origin}/e/${event.slug}`)
					}
				>
					Copy Link
				</Button>
			</CardFooter>
		</Card>
	);
}
