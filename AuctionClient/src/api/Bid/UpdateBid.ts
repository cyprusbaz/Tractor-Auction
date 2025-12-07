import { apiClient } from "../AxiosInstace";
import type { Bid } from "../../types/Bid";

export const UpdateBid = async (bid: Bid): Promise<void> => {
  try {
    await apiClient.put("Bid/Update", bid);
  } catch {
    throw new Error("Could not update bid");
  }
};
