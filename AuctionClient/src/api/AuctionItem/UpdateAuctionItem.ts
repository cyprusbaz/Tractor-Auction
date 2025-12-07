import { apiClient } from "../AxiosInstace";
import type { Item } from "../../types/AuctionItem";

export const UpdateAuctionItem = async (item: Item): Promise<void> => {
  try {
    await apiClient.put("AuctionItem/Update", item);
  } catch {
    throw new Error("Could not update auction items");
  }
};
