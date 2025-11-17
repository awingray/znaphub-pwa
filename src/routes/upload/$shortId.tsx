import { ROUTES } from "@/constants/routes";
import UploadComponent from "@/pages/upload";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTES.UPLOAD)({
	component: UploadComponent,
});
