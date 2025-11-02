import { createFileRoute, redirect } from "@tanstack/react-router";
import AppLayout from "@/components/layouts/app-layout";
import { useAuthStore } from "@/stores/auth-store";
import { ROUTES } from "@/constants/routes";

export const Route = createFileRoute(ROUTES.AUTH.BASE)({
	beforeLoad: async ({ location }) => {
		if (useAuthStore((state) => state.isAuthenticated)) return;
		throw redirect({
			to: ROUTES.LOGIN,
			search: {
				redirect: location.href,
			},
		});
	},
	component: AppLayout,
});
