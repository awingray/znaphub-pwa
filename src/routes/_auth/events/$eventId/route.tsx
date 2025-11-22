import { ROUTES } from "@/constants/routes";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.INTERNAL.EVENTS.DETAIL)({
	component: () => <Outlet />,
});
