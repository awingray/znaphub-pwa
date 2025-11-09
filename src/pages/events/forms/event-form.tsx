import { useEventForm } from "../hooks/use-event-form";
import { FieldError, FieldGroup, FieldTitle } from "@/components/ui/field";
import { Show } from "@/components/flow/show";
import { EventFields } from "./event-fields";

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

				<EventFields form={form} />

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
