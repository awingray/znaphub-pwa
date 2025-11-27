import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useEventBanner from "../hooks/use-event-banner";

export default function EventBannerCard() {
	const { history, event } = useEventBanner();

	return (
		<Card className="mb-6 p-4">
			<div className="flex items-start justify-between">
				<div>
					<CardTitle>{event.name}</CardTitle>
					<CardDescription>
						{event.description ?? "No description available"}
					</CardDescription>
				</div>

				<Button variant="ghost" size="sm" onClick={() => history.back()}>
					← Back
				</Button>
			</div>
		</Card>
	);
}
