import { useCreateEvent } from "@/api/events/mutations";
import { useAppForm } from "@/hooks/use-app-form";
import { eventFormOptions } from "../forms/event-form-options";

export function useEventForm() {
	const { mutate, isPending, error } = useCreateEvent();
	const form = useAppForm({
		...eventFormOptions,
		onSubmit: async ({ value }) => {
			mutate(value);
		},
	});

	return { form, isPending, error };
}
