import { Outlet } from "@tanstack/react-router";

export default function AppLayout() {
	return (
		<div className="h-full group">
			<header></header>
			<main className="flex-1 bg-muted/30">
				<div className="mx-auto max-w-7xl p-6">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
