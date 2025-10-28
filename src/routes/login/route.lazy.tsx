import { createLazyFileRoute } from "@tanstack/react-router";
import LoginComponent from "@/pages/auth";
import { ROUTES } from "@/constants/routes";

export const Route = createLazyFileRoute(ROUTES.LOGIN)({
	component: LoginComponent,
});
