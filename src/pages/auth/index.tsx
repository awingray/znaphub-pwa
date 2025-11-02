import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

export default function LoginComponent() {
	const login = useAuthStore((state) => state.login);
	return (
		<div>
			Hello "/login"! <Button onClick={() => login()}>Login</Button>
		</div>
	);
}
