import { createEventSchema } from "@/api/events/schemas";
import { useEventForm } from "../hooks/use-event-form";
import { FieldError, FieldGroup, FieldTitle } from "@/components/ui/field";
import { Show } from "@/components/flow/show";

export default function EventForm() {
	const { form, isPending, error } = useEventForm();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="space-y-4 mb-8 p-4 border rounded-lg"
		>
			<FieldGroup>
				<FieldTitle>Create Event</FieldTitle>

				<Show.When condition={!!error}>
					<FieldError errors={[{ message: error?.message }]} />
				</Show.When>

				<form.AppField
					name="name"
					validators={{ onChange: createEventSchema.shape.name }}
				>
					{(field) => <field.InputField label="Name" disabled={isPending} />}
				</form.AppField>

				<form.AppField
					name="slug"
					validators={{ onChange: createEventSchema.shape.slug }}
				>
					{(field) => <field.InputField label="Slug" disabled={isPending} />}
				</form.AppField>

				<form.AppField name="description">
					{(field) => (
						<field.TextareaField label="Description" disabled={isPending} />
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubmitButton
						label={isPending ? "Creating..." : "Create"}
						className="w-full mt-2"
						disabled={isPending}
					/>
				</form.AppForm>
			</FieldGroup>
		</form>
	);
}
