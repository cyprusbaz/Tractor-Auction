export interface Item {
  id?: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  engine: string;
  description: string;
  attachment: string;
  price: number;
  imageUrl: string;
  auctionListingId: string;
}

export interface UploadItem {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  engine: string;
  description: string;
  attachment: string;
  price: number;
  image: File | null;
  auctionListingId: string;
}
