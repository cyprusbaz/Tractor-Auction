import { apiClient } from "../AxiosInstace";
import type { Item } from "../../types/AuctionItem";

export const GetAllAuctionItemsByListingId = async (
  id: string
): Promise<Item[]> => {
  try {
    const res = await apiClient.get("AuctionItem/GetByListingId", {
      params: { listingId: id },
    });
    console.log(res.data);
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
