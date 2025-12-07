export interface Payment {
  id: string;
  amount: number;
  date: string;
  status: Status;
  auctionItemId: string;
  userId: string;
}
export interface PaymentCreation {
  amount: number;
  auctionItemId: string;
  userId: string;
}

export type Status = 1 | 2 | 3;

export const StatusText: Record<Status, string> = {
  1: "Pending",
  2: "Failed",
  3: "Completed",
};
