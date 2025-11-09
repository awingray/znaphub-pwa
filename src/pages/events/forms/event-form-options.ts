import { formOptions } from "@tanstack/react-form";

export const eventFormOptions = formOptions({
	defaultValues: {
		name: "",
		slug: "",
		description: "",
		isPublic: false,
	},
});
