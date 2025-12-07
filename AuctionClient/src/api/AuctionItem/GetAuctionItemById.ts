import { apiClient } from "../AxiosInstace";
import type { Item } from "../../types/AuctionItem";

export const GetAuctionItemById = async (id: string): Promise<Item> => {
  try {
    const res = await apiClient.get("AuctionItem/GetById", { params: { id } });
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
