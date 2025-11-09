import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import FormInput from "@/components/forms/form-input";
import FormTextarea from "@/components/forms/form-textarea";

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		FormInput,
		FormTextarea,
	},
	formComponents: {},
});
