import { ROUTES } from "@/constants/routes";
import EventsComponent from "@/pages/events";
import EventListSkeleton from "@/pages/events/components/event-list-skeleton";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createLazyFileRoute(ROUTES.INTERNAL.EVENTS.INDEX)({
	component: () => (
		<Suspense fallback={<EventListSkeleton />}>
			<EventsComponent />
		</Suspense>
	),
});
