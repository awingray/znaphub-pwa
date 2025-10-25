import { ROUTES } from "@/lib/routes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.AUTH.DASHBOARD)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_auth/dashboard/"!</div>;
}
