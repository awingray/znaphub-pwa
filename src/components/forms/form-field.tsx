import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";

interface FormFieldProps {
	label: string;
	name: string;
	// errors?: Array<string | undefined>;
	children: ReactNode;
}

export function FormField({ label, name, children }: FormFieldProps) {
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
			{children}
			{/* {errors.length > 0 && (
				<p className="text-sm text-red-500 mt-1">
					{errors.join(", ")}
				</p>
			)} */}
		</div>
	);
}
