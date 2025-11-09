import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "@/hooks/form-context";
import { Textarea } from "../ui/textarea";

export default function TextareaField({
	label,
	disabled,
}: {
	label: string;
	disabled?: boolean;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);
	return (
		<Field>
			<FieldLabel htmlFor={field.name}>{label}</FieldLabel>
			<Textarea
				id={field.name}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
				disabled={disabled}
			/>
			<FieldError errors={errors} />
		</Field>
	);
}
