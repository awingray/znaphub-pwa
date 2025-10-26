import { ROUTES } from "@/lib/routes";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.LOGIN)({
	beforeLoad: async ({ search }) => {
		const { isAuthenticated, isInitialized, initialize } = useAuthStore.getState();
        if (!isInitialized) {
            await initialize();
        }

		if (isAuthenticated) {
			const redirectPath = search.redirect || ROUTES.EVENTS;
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
