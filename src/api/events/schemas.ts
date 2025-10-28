import { z } from "zod";

export const eventSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	slug: z.string(),
	description: z.string().nullable(),
	isPublic: z.boolean(),
	createdAt: z.iso.datetime(),
});

export const eventListschema = z.array(eventSchema);

export type Event = z.infer<typeof eventSchema>;
export type EventList = z.infer<typeof eventListschema>;
