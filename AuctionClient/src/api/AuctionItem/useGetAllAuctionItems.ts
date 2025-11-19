import { apiClient } from "../AxiosInstace";
import type { Item } from "../../types/AuctionItem";

export const useGetAllAuctionItems = async (): Promise<Item[]> => {
  try {
    const res = await apiClient.get("AuctionItem/GetAll");
    console.log(res.data);
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
