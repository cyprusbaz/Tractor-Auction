import type { AuctionListing } from "../../types/AuctionListing";
import { apiClient } from "../AxiosInstace";

export const UpdateAuctionListing = async (
  auctionListing: AuctionListing
): Promise<void> => {
  try {
    await apiClient.put(`AuctionListing/Update`, auctionListing);
  } catch {
    throw new Error("Could not update this Listing");
  }
};
