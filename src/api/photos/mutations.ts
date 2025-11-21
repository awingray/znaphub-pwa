import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../endpoints";
import { uploadPhotoSchema } from "./schemas";
import type { UploadPhotoPayload } from "./schemas";
import { api } from "../api-client";

export const createPhoto = async (payload: UploadPhotoPayload) => {
	const { shortId, file } = uploadPhotoSchema.parse(payload);

	const form = new FormData();
	form.append("file", file);

	await api.post(ENDPOINTS.PHOTOS.CREATE(shortId), form);
};

export const useCreatePhoto = () =>
	useMutation({
		mutationFn: createPhoto,
	});
