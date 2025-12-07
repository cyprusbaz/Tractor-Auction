import { apiClient } from "../AxiosInstace";
import type { Item, UploadItem } from "../../types/AuctionItem";

export const UploadAuctionItem = async (item: UploadItem) => {
  try {
    const formData = new FormData();

    formData.append("brand", item.brand);
    formData.append("model", item.model);
    formData.append("year", String(item.year));
    formData.append("mileage", String(item.mileage));
    formData.append("color", item.color);
    formData.append("engine", item.engine);
    formData.append("description", item.description);
    formData.append("attachment", item.attachment);
    formData.append("price", String(item.price));
    if (item.image) {
      formData.append("image", item.image);
    }
    formData.append("auctionListingId", item.auctionListingId);

    const res = await apiClient.post("AuctionItem/Create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload auction item");
  }
};
