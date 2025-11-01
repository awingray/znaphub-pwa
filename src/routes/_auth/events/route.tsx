import { ROUTES } from "@/constants/routes";
import EventListComponent from "@/pages/events";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.AUTH.EVENTS)({
	component: EventListComponent,
});
