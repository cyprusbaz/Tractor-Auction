import { useEffect, useState } from "react";
import type { Item } from "../types/AuctionItem";
import { useGetAllAuctionItems } from "../api/AuctionItem/useGetAllAuctionItems";
import styles from "./BiddingPage.module.css";
import { BiddingCard } from "../components/biddingCard/BiddingCard";

export const BiddingPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        let data: Item[] = [];
        data = await useGetAllAuctionItems();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.auctionItems}>
        <div className={styles.container}>
          <h1>Find Tractor you need</h1>
          <div className={styles.auctionList}>
            {items.length > 0 ? (
              items.map((item) => <BiddingCard key={item.id} {...item} />)
            ) : (
              <p>Loading tractors...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
