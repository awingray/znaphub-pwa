import { useCreateEvent } from "@/api/events/mutations";
import { useAppForm } from "@/hooks/use-app-form";

export function useEventForm() {
	const { mutate, isPending, error } = useCreateEvent();
	const form = useAppForm({
		defaultValues: {
			name: "",
			slug: "",
			description: "",
			isPublic: false,
		},
		onSubmit: async ({ value }) => {
			mutate(value);
		},
	});

	return { form, isPending, error };
}
