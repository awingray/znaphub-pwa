import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.LOGIN)({
	beforeLoad: async ({ search }) => {
		if (!useAuthStore((state) => state.isAuthenticated)) return;
		const redirectPath = search.redirect || ROUTES.EVENTS;
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
