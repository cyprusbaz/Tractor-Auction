import React from "react";
import type { AuctionListingCreation } from "../../types/AuctionListing";
import { apiClient } from "../AxiosInstace";

export const CreateAuctionListing = async (
  listing: AuctionListingCreation
): Promise<AuctionListingCreation> => {
  try {
    const res = await apiClient.post("AuctionListing/Create", listing);
    console.log(res.data);
    return res.data;
  } catch {
    throw new Error("Could not send a listing");
  }
};
