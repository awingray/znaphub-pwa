import type { Event } from "@/api/events/schemas";
import { useCreateQrCode } from "@/api/qrcodes/mutations";
import Show from "@/components/flow/show";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import QrCodeCard from "./qrcode-card";

interface EventCardProps {
	event: Event;
}

export default function EventCard({ event }: EventCardProps) {
	const { mutate, data, isPending } = useCreateQrCode();
	const handleCreateQrCode = () => {
		mutate({ eventId: event.id });
	};

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
				<Show when={!!data?.uploadUrl}>
					<QrCodeCard uploadUrl={data?.uploadUrl} />
				</Show>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<Button size="sm" onClick={handleCreateQrCode} disabled={isPending}>
					Create QR Code
				</Button>
			</CardFooter>
		</Card>
	);
}
