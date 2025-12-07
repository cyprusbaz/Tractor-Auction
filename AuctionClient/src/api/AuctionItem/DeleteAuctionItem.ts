import { apiClient } from "../AxiosInstace";

export const DeleteAuctionItem = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`AuctionItem/Delete`, {
      data: {
        id,
      },
    });
  } catch {
    throw new Error("Could not delete this Listing");
  }
};
