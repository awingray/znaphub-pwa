import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	beforeLoad: ({ search }) => {
		const { isAuthenticated } = useAuthStore.getState();
		if (isAuthenticated) {
			const redirectPath = search.redirect || "/dashboard";
			throw redirect({
				to: redirectPath as string,
			});
		}
	},
	validateSearch: (search: Record<string, unknown>) => {
		return {
			redirect: search.redirect as string | undefined,
		};
	},
});