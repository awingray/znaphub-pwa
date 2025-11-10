import { useAuthStore } from "@/stores/auth-store";
import { Button } from "../ui/button";

export default function Header() {
	const logout = useAuthStore((state) => state.logout);
	const handleLogout = () => {
		logout();
	};

	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				<div className="text-lg font-semibold tracking-tight cursor-pointer">
					<span className="text-primary">ZnapHub</span>
				</div>

				<div className="flex items-center gap-3">
					<Button variant="outline" size="sm" onClick={handleLogout}>
						Logout
					</Button>
				</div>
			</div>
		</header>
	);
}
