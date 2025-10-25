import { ROUTES } from "@/lib/routes";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.LOGIN)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/login"!</div>;
}
