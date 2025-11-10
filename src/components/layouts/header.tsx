import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layouts/page-layout";

export default function Header() {
	const logout = useAuthStore((state) => state.logout);
	const handleLogout = () => {
		logout();
	};

	return (
		<header className="border-b bg-background">
			<PageLayout className="flex h-16 items-center justify-between">
				<div className="text-lg font-semibold tracking-tight cursor-pointer">
					<span className="text-primary">ZnapHub</span>
				</div>
				<Button variant="outline" size="sm" onClick={handleLogout}>
					Logout
				</Button>
			</PageLayout>
		</header>
	);
}
