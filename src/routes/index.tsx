import { createFileRoute, redirect } from "@tanstack/react-router";
import { ROUTES } from "@/constants/routes";
import LandingComponent from "@/pages/landing";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute(ROUTES.HOME)({
	beforeLoad: () => {
		const { isAuthenticated } = useAuthStore.getState();
		if (isAuthenticated)
			throw redirect({ to: ROUTES.EVENTS });
	},
	component: LandingComponent,
});
