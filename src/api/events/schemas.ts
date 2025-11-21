import { z } from "zod";

export const eventSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	slug: z.string(),
	description: z.string().nullable(),
	isPublic: z.boolean(),
	createdAt: z.coerce.date(),
});

export const eventListSchema = z.array(eventSchema);

export const createEventSchema = z.object({
	name: z.string().min(1).max(200),
	slug: z
		.string()
		.min(1)
		.max(200)
		.regex(
			/^[a-z0-9-]+$/,
			"Slug must contain only lowercase letters, numbers, and hyphens",
		),
	description: z.string().max(4000).nullable().optional(),
	isPublic: z.boolean().default(false),
});

export const photoSchema = z.object({
	id: z.uuid(),
	eventId: eventSchema.shape.id,
	fileName: z.string().min(1).max(512),
	url: z.string().min(1),
	uploadAt: z.coerce.date(),
});
export const photoListSchema = z.array(photoSchema);

export type Event = z.infer<typeof eventSchema>;
export type EventList = z.infer<typeof eventListSchema>;

export type Photo = z.infer<typeof photoSchema>;
export type PhotoList = z.infer<typeof photoListSchema>;

export type CreateEventPayload = z.infer<typeof createEventSchema>;
