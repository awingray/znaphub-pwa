import { ROUTES } from "@/constants/routes";
import { completeLogin } from "@/lib/auth";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.CALLBACK)({
	beforeLoad: async () => {
		const user = await completeLogin();
		useAuthStore.getState().setToken(user.access_token);

		const target =
			(user?.state && (user.state as any).redirect) || ROUTES.EVENTS.LIST;
		throw redirect({ to: target });
	},
});
