import { Outlet } from "@tanstack/react-router";
import Header from "./header";
import { PageLayout } from "./page-layout";

export default function AppLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1 bg-muted/30">
				<PageLayout className="py-6">
					<Outlet />
				</PageLayout>
			</main>
		</div>
	);
}
