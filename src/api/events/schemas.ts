import { z } from "zod";

export const eventSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	slug: z.string(),
	description: z.string().nullable(),
	isPublic: z.boolean(),
	createdAt: z.coerce.date(),
});

export const eventListschema = z.array(eventSchema);

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

export type Event = z.infer<typeof eventSchema>;
export type EventList = z.infer<typeof eventListschema>;

export type CreateEventPayload = z.infer<typeof createEventSchema>;
