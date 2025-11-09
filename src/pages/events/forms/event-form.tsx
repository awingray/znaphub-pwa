import { createEventSchema } from "@/api/events/schemas";
import { Button } from "@/components/ui/button";
import { useEventForm } from "../hooks/use-event-form";
import { FieldGroup, FieldTitle } from "@/components/ui/field";
import { Show } from "@/components/flow/show";
import FormInput from "@/components/forms/form-input";
import FormTextarea from "@/components/forms/form-textarea";

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
					<div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
						{error?.message}
					</div>
				</Show.When>

				<form.Field
					name="name"
					validators={{ onChange: createEventSchema.shape.name }}
				>
					{(field) => <FormInput label="Name" disabled={isPending} />}
				</form.Field>

				<form.Field
					name="slug"
					validators={{ onChange: createEventSchema.shape.slug }}
				>
					{(field) => <FormInput label="Slug" disabled={isPending} />}
				</form.Field>

				<form.Field name="description">
					{(field) => <FormTextarea label="Description" disabled={isPending} />}
				</form.Field>

				<Button type="submit" disabled={isPending}>
					{isPending ? "Creating..." : "Create Event"}
				</Button>
			</FieldGroup>
		</form>
	);
}
