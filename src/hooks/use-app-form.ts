import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import InputField from "@/components/forms/input-field";
import TextareaField from "@/components/forms/textarea-field";
import { SubmitButton } from "@/components/forms/submit-button";

export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		InputField,
		TextareaField,
	},
	formComponents: {
		SubmitButton,
	},
});
