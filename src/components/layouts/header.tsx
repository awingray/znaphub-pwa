import { useAuthStore } from "@/stores/auth-store";

export default function Header() {
	const login = useAuthStore((state) => state.login);
	return <header></header>;
}
