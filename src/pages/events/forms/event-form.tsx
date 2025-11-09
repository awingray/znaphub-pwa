import { createEventSchema } from "@/api/events/schemas";
import { Button } from "@/components/ui/button";
import { useEventForm } from "../hooks/use-event-form";
import { FieldGroup, FieldTitle } from "@/components/ui/field";
import { Show } from "@/components/flow/show";
import InputField from "@/components/forms/input-field";
import TextareaField from "@/components/forms/textarea-field";

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

				<form.AppField
					name="name"
					validators={{ onChange: createEventSchema.shape.name }}
					children={(field) => (
						<field.InputField label="Name" disabled={isPending} />
					)}
				/>

				<form.AppField
					name="slug"
					validators={{ onChange: createEventSchema.shape.slug }}
					children={(field) => (
						<field.InputField label="Slug" disabled={isPending} />
					)}
				/>

				<form.AppField
					name="description"
					children={(field) => (
						<field.TextareaField label="Description" disabled={isPending} />
					)}
				/>

				<Button type="submit" disabled={isPending}>
					{isPending ? "Creating..." : "Create Event"}
				</Button>
			</FieldGroup>
		</form>
	);
}
