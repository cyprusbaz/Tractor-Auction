export interface AuctionListing {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface AuctionListingCreation {
  name: string;
  startDate: string;
  endDate: string;
  userId: string;
}
