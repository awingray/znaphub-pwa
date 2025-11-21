import { z } from "zod";

export const uploadPhotoParamsSchema = z.object({
	shortId: z.string().min(1).max(32),
});

export const uploadPhotoBodySchema = z.object({
	file: z
		.instanceof(File)
		.refine((file) => file.size > 0, "File is empty")
		.refine((file) => file.size <= 10 * 1024 * 1024, "File must be <= 10MB")
		.refine(
			(file) => file.type.startsWith("image/"),
			"Only images are allowed",
		),
});

export const uploadPhotoSchema = z.object({
	shortId: uploadPhotoParamsSchema.shape.shortId,
	file: uploadPhotoBodySchema.shape.file,
});

export type UploadPhotoParams = z.infer<typeof uploadPhotoParamsSchema>;
export type UploadPhotoBody = z.infer<typeof uploadPhotoBodySchema>;
export type UploadPhotoPayload = z.infer<typeof uploadPhotoSchema>;
