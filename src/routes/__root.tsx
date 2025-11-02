import { useAuthStore } from "@/stores/auth-store";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => <Outlet />,
});
