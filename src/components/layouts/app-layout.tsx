import { Outlet } from "@tanstack/react-router";

export default function AppLayout() {
	return (
		<div className="h-full group">
			<main className="container mx-auto px-4 py-6">
				<Outlet />
			</main>
		</div>
	);
}
