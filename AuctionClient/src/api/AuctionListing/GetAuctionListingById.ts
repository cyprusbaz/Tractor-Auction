import { apiClient } from "../AxiosInstace";
import type { AuctionListing } from "../../types/AuctionListing";

export const GetAuctionListingById = async (
  id: string
): Promise<AuctionListing> => {
  try {
    const res = await apiClient.get("AuctionListing/GetById", {
      params: { id },
    });
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
