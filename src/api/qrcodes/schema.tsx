import { z } from "zod";
import { eventSchema } from "../events/schemas";

export const createQrCodeSchema = z.object({
	eventId: eventSchema.shape.id,
});

export type CreateQrCodePayload = z.infer<typeof createQrCodeSchema>;
