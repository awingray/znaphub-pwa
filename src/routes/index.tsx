import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "@/constants/routes";
import LandingComponent from "@/pages/landing";

export const Route = createFileRoute(ROUTES.HOME)({
	component: LandingComponent,
});
