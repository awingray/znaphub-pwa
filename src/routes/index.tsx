import { createFileRoute, redirect } from "@tanstack/react-router";
import { ROUTES } from "@/constants/routes";
import LandingComponent from "@/pages/landing";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute(ROUTES.HOME)({
	beforeLoad: () => {
		if (!useAuthStore.getState().isAuthenticated) return;
		throw redirect({ to: ROUTES.EVENTS });
	},
	component: LandingComponent,
});
