import type { BidCreation } from "../../types/Bid";
import { apiClient } from "../AxiosInstace";

export const CreateBid = async (bid: BidCreation): Promise<void> => {
  try {
    await apiClient.post("Bid/Create", bid);
  } catch {
    throw new Error("Could not delete the bid");
  }
};
