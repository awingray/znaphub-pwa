import { useMutation } from "@tanstack/react-query";
import { api } from "../api-client";
import { ENDPOINTS } from "../endpoints";
import { createQrCodeSchema, type CreateQrCodePayload } from "./schema";

const createQrCode = async (qrCodePayload: CreateQrCodePayload) => {
	const payload = createQrCodeSchema.parse(qrCodePayload);
	const response = await api.post(ENDPOINTS.QRCODES.CREATE, payload);
	return response;
};

export const useCreateQrCode = () => {
	return useMutation({
		mutationFn: (payload: CreateQrCodePayload) => createQrCode(payload),
	});
};
