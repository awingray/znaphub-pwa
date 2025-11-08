import { useCreateEvent } from "@/api/events/mutations";
import { createEventSchema } from "@/api/events/schemas";
import { useForm } from "@tanstack/react-form";

export function useEventForm() {
	const { mutate, isPending, error } = useCreateEvent();

	const form = useForm({
		defaultValues: {
			name: "",
			slug: "",
			description: "",
			isPublic: false,
		},
		onSubmit: async ({ value }) => {
			mutate(value);
		}
	});

	return { form, isPending, error };
}
