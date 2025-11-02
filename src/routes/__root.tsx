import { useAuthStore } from "@/stores/auth-store";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	beforeLoad: async () => await useAuthStore.getState().initialize(),
	component: () => <Outlet />,
});
