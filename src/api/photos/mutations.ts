import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../endpoints";
import { uploadPhotoSchema } from "./schemas";
import type { UploadPhotoPayload } from "./schemas";

export const createPhoto = async (payload: UploadPhotoPayload) => {
	const { shortId, file } = uploadPhotoSchema.parse(payload);

	const form = new FormData();
	form.append("file", file);

	const res = await fetch(ENDPOINTS.PHOTOS.CREATE(shortId), {
		method: "POST",
		body: form,
	});
};

export const useCreatePhoto = () =>
	useMutation({
		mutationFn: createPhoto,
	});
