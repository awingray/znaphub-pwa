import {
	DialogHeader,
	Dialog,
	DialogContent,
	DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { QRCodeSVG } from "qrcode.react";

interface QrCodeDialogProps {
	open: boolean;
	uploadUrl?: string;
	onOpenChange: (open: boolean) => void;
}

export default function QrCodeDialog({
	uploadUrl,
	open,
	onOpenChange,
}: QrCodeDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>QR Code for Upload</DialogTitle>
					<DialogDescription>
						Scan or share this QR code to allow guests to upload photos.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-4 py-4">
					<QRCodeSVG value={uploadUrl ?? ""} size={256} />
					<p className="text-xs text-muted-foreground break-all text-center px-4">
						{uploadUrl}
					</p>
				</div>
			</DialogContent>
		</Dialog>
	);
}
