import { Outlet } from "@tanstack/react-router";
import Header from "./header";

export default function AppLayout() {
	return (
		<div className="h-full group">
			<Header />
			<main className="container mx-auto px-4 py-6">
				<Outlet />
			</main>
		</div>
	);
}
