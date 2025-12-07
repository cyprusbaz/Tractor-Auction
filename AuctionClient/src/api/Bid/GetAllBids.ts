import type { Bid } from "../../types/Bid";
import { apiClient } from "../AxiosInstace";

export const GetAllBid = async (): Promise<Bid[]> => {
  try {
    const res = await apiClient.get("Bid/GetAll");
    return res.data;
  } catch {
    throw new Error("Could not retrieve bids");
  }
};
