import { apiClient } from "../AxiosInstace";

export const DeletePayment = async (id: string): Promise<void> => {
  try {
    await apiClient.delete("Payment/Delete", {
      data: {
        id,
      },
    });
  } catch {
    throw new Error("Could not delete the payment");
  }
};
