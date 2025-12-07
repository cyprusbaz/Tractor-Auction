import type { Payment, PaymentCreation } from "../../types/Payment";
import { apiClient } from "../AxiosInstace";

export const CreatePayment = async (
  payment: PaymentCreation
): Promise<string> => {
  try {
    const res = await apiClient.post("Payment/Create", payment);
    return res.data;
  } catch {
    throw new Error("Could not delete the payment");
  }
};
