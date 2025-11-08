import { Field, FieldLabel, FieldError } from "@/components/ui/field";

interface FormFieldProps {
	label: string;
	name: string;
	errors?: Array<{ message?: string } | undefined>;
	children: React.ReactNode;
}

export function FormField({ label, name, errors, children }: FormFieldProps) {
	return (
		<Field>
			<FieldLabel htmlFor={name}>{label}</FieldLabel>
			{children}
			<FieldError errors={errors} />
		</Field>
	);
}
