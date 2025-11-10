import { ROUTES } from "@/constants/routes";
import LandingComponent from "@/pages/landing";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.HOME)({
	component: LandingComponent,
});
