import { DEFAULT_REDIRECT, ROUTES } from "@/constants/routes";
import { completeLogin } from "@/lib/auth";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.CALLBACK)({
	beforeLoad: async () => {
		const user = await completeLogin();
		useAuthStore.getState().setToken(user.access_token);

		const target =
			(user?.state && (user.state as any).redirect) || DEFAULT_REDIRECT;
		throw redirect({ to: target });
	},
});
