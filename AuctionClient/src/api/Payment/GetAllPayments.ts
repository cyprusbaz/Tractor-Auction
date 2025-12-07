import type { Payment } from "../../types/Payment";
import { apiClient } from "../AxiosInstace";

export const GetAllPayments = async (): Promise<Payment[]> => {
  try {
    const res = await apiClient.get("Payment/GetAll");
    return res.data;
  } catch {
    throw new Error("Could not retrieve payments");
  }
};
