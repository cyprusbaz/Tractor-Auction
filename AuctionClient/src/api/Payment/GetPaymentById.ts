import { apiClient } from "../AxiosInstace";
import type { Payment } from "../../types/Payment";

export const GetPaymentById = async (id: string): Promise<Payment> => {
  try {
    const res = await apiClient.get("Payment/GetById", { params: { id } });
    return res.data;
  } catch {
    throw new Error("Could not retrieve payment");
  }
};
