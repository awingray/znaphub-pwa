import { ROUTES } from "@/constants/routes";
import EventPhotosComponent from "@/pages/events/photos";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.INTERNAL.EVENTS.PHOTOS)({
	component: EventPhotosComponent,
});
