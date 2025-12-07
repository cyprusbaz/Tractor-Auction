import { apiClient } from "../AxiosInstace";

import type { Payment } from "../../types/Payment";

export const UpdatePayment = async (payment: Payment): Promise<void> => {
  try {
    await apiClient.put("Payment/Update", payment);
  } catch {
    throw new Error("Could not update payment");
  }
};
