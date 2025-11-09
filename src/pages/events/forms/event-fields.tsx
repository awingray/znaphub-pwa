import { withForm } from "@/hooks/use-app-form";
import { eventFormOptions } from "./event-form-options";
import { createEventSchema } from "@/api/events/schemas";

export const EventFields = withForm({
	...eventFormOptions,
	render: ({ form }) => {
		return (
			<>
				<form.AppField
					name="name"
					validators={{ onChange: createEventSchema.shape.name }}
				>
					{(field) => <field.InputField label="Name" />}
				</form.AppField>

				<form.AppField
					name="slug"
					validators={{ onChange: createEventSchema.shape.slug }}
				>
					{(field) => <field.InputField label="Slug" />}
				</form.AppField>

				<form.AppField name="description">
					{(field) => <field.TextareaField label="Description" />}
				</form.AppField>
			</>
		);
	},
});
