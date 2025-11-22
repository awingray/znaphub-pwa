import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_REDIRECT, ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute(ROUTES.HOME)({
	beforeLoad: ({ search }) => {
		if (!useAuthStore.getState().isAuthenticated) return;
		const redirectPath = search.redirect || DEFAULT_REDIRECT;
		throw redirect({
			to: redirectPath as string,
		});
	},
	validateSearch: (search: Record<string, unknown>) => {
		return {
			redirect: search.redirect as string | undefined,
		};
	},
});
