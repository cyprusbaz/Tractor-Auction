export interface Item {
  id?: string;
  brand: string;
  model: string;
  year: Number;
  mileage: Number;
  color: string;
  engine: string;
  description: string;
  price: Number;
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
  price: number;
  image: File | null;
  auctionListingId: string;
}
