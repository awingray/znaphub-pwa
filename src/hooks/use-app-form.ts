import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import { FormField } from "@/components/forms/form-field";

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormField
  },
  formComponents: {},
});