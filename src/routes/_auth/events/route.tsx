import { ROUTES } from "@/constants/routes";
import EventsComponent from "@/pages/events";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.AUTH.EVENTS.BASE)({
	component: EventsComponent,
});
