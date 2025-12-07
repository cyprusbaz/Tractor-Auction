export interface Bid {
  id: string;
  amount: number;
  timestamp: string;
  isWinner: boolean;
  bidderId: string;
  auctionItemId: string;
}
export interface BidCreation {
  amount: number;
  bidderId: string;
  auctionItemId: string;
}
