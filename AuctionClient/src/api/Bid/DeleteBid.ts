import { apiClient } from "../AxiosInstace";

export const DeleteBid = async (id: string): Promise<void> => {
  try {
    await apiClient.delete("Bid/Delete", {
      data: {
        id,
      },
    });
  } catch {
    throw new Error("Could not delete the bid");
  }
};
