import { ROUTES } from "@/constants/routes";
import EventsComponent from "@/pages/events";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.INTERNAL.EVENTS.INDEX)({
	component: EventsComponent,
});
