import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import { file } from "zod";

interface UploadCardProps {
	shortId: string;
	onFileInput: (e: ChangeEvent<HTMLInputElement>) => void;
	onUpload: () => void;
}

export default function UploadCard({
	shortId,
	onFileInput,
	onUpload,
}: UploadCardProps) {
	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle>Upload Photos</CardTitle>
				<CardDescription>Code: {shortId}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
					<Upload className="w-12 h-12 mb-2 text-muted-foreground" />
					<Input
						type="file"
						accept="image/*"
						capture="environment"
						className="hidden"
						onChange={onFileInput}
					/>
				</Label>
				<Button className="w-full" onClick={onUpload} disabled={!file}>
					Upload
				</Button>
			</CardContent>
		</Card>
	);
}
