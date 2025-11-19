import { apiClient } from "../AxiosInstace";

export const RemoveAuctionListing = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`AuctionListing/Delete/${id}`);
  } catch {
    throw new Error("Could not delete this Listing");
  }
};
