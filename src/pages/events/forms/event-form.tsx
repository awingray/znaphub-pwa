import { createEventSchema } from "@/api/events/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEventForm } from "../hooks/use-event-form";
import { FormField } from "@/components/forms/form-field";
import { FieldGroup } from "@/components/ui/field";
import { Show } from "@/components/flow/show";

export default function EventForm() {
	const { form, isPending, error } = useEventForm();
	return (
		<FieldGroup>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-4 mb-8 p-4 border rounded-lg"
			>
				<h2 className="text-lg font-semibold">Create Event</h2>

				<Show.When condition={!!error}>
					<div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
						{error?.message}
					</div>
				</Show.When>

				<form.Field
					name="name"
					validators={{ onChange: createEventSchema.shape.name }}
				>
					{(field) => (
						<FormField
							label="Name"
							name={field.name}
							errors={field.state.meta.errors}
						>
							<Input
								id={field.name}
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								disabled={isPending}
							/>
						</FormField>
					)}
				</form.Field>

				<form.Field
					name="slug"
					validators={{ onChange: createEventSchema.shape.slug }}
				>
					{(field) => (
						<FormField
							label="Slug"
							name={field.name}
							errors={field.state.meta.errors}
						>
							<Input
								id={field.name}
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								disabled={isPending}
							/>
						</FormField>
					)}
				</form.Field>

				<form.Field name="description">
					{(field) => (
						<FormField label="Description" name={field.name}>
							<Textarea
								id={field.name}
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								disabled={isPending}
							/>
						</FormField>
					)}
				</form.Field>

				<Button type="submit" disabled={isPending}>
					{isPending ? "Creating..." : "Create Event"}
				</Button>
			</form>
		</FieldGroup>
	);
}
