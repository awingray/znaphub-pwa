import { ROUTES } from "@/constants/routes";
import UploadComponent from "@/pages/upload";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTES.UPLOAD)({
	component: UploadComponent,
});
