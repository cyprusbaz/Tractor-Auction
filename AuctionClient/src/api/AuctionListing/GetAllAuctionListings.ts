import { apiClient } from "../AxiosInstace";
import type { AuctionListing } from "../../types/AuctionListing";

export const GetAllAuctionListings = async (): Promise<AuctionListing[]> => {
  try {
    const res = await apiClient.get("AuctionListing/GetAll");
    console.log(res.data);
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
