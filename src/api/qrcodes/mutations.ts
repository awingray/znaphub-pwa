import { useMutation } from "@tanstack/react-query";
import { api } from "../api-client";
import { ENDPOINTS } from "../endpoints";
import {
	createQrCodeResponseSchema,
	createQrCodeSchema,
	type CreateQrCodePayload,
	type CreateQrCodeResponse,
} from "./schemas";

export const createQrCode = async (
	qrCodePayload: CreateQrCodePayload,
): Promise<CreateQrCodeResponse> => {
	const payload = createQrCodeSchema.parse(qrCodePayload);
	const response = await api.post<CreateQrCodeResponse>(
		ENDPOINTS.QRCODES.CREATE,
		payload,
	);
	return createQrCodeResponseSchema.parse(response);
};

export const useCreateQrCode = () =>
	useMutation({
		mutationFn: createQrCode,
	});
