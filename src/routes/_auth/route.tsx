import { createFileRoute, redirect } from "@tanstack/react-router";
import AppLayout from "@/components/layouts/app-layout";
import { useAuthStore } from "@/stores/auth-store";
import { ROUTES } from "@/lib/routes";

export const Route = createFileRoute(ROUTES.AUTH.BASE)({
	beforeLoad: async ({ location }) => {
		const { isAuthenticated, isInitialized, initialize } =
			useAuthStore.getState();

		if (!isInitialized) {
			await initialize();
		}

		if (!isAuthenticated) {
			throw redirect({
				to: ROUTES.LOGIN,
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: AppLayout,
});
