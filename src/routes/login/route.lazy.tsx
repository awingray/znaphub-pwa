import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { useAuthStore } from "@/stores/auth-store";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.LOGIN)({
	component: RouteComponent,
});

function RouteComponent() {
	const { login } = useAuthStore.getState();
	return (
		<div>
			Hello "/login"! <Button onClick={() => login()}>Login</Button>{" "}
		</div>
	);
}
