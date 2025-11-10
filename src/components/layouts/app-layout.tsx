import { Outlet } from "@tanstack/react-router";
import Header from "@/components/layouts/header";

export default function AppLayout() {
	return (
		<div className="h-full group">
			<Header />
			<main className="flex-1 bg-muted/30">
				<div className="mx-auto max-w-7xl p-6">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
