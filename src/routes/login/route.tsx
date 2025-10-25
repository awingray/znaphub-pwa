import { ROUTES } from "@/lib/routes";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.LOGIN)({
	beforeLoad: ({ search }) => {
		const { isAuthenticated } = useAuthStore.getState();
		if (isAuthenticated) {
			const redirectPath = search.redirect || ROUTES.AUTH.DASHBOARD;
			throw redirect({
				to: redirectPath as string,
			});
		}
	},
	validateSearch: (search: Record<string, unknown>) => {
		return {
			redirect: search.redirect as string | undefined,
		};
	},
});
