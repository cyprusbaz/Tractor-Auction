import { apiClient } from "../AxiosInstace";
import type { Bid } from "../../types/Bid";

export const GetBidById = async (id: string): Promise<Bid> => {
  try {
    const res = await apiClient.get("Bid/GetById", { params: { id } });
    return res.data;
  } catch {
    throw new Error("Could not retrieve bid");
  }
};
