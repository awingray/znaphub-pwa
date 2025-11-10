import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import EventForm from "../forms/event-form";

interface EventCreateDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function EventCreateDialog({
	open,
	onOpenChange,
}: EventCreateDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle>Create Event</DialogTitle>
				</DialogHeader>

				<div className="mt-4">
					<EventForm onSuccess={() => onOpenChange(false)} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
