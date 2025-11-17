import { QRCodeSVG } from "qrcode.react";

interface QrCodeCardProps {
	uploadUrl: string | undefined;
}

export default function QrCodeCard({ uploadUrl }: QrCodeCardProps) {
	return (
		<div className="flex flex-col items-center gap-2 mt-4">
			<QRCodeSVG value={uploadUrl ?? ""} size={128} />
			<p className="text-xs text-muted-foreground break-all text-center">
				{uploadUrl}
			</p>
		</div>
	);
}
