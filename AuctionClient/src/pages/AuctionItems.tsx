import React, { useEffect, useState } from "react";
import styles from "./AuctionItems.module.css";
import { useGetAllAuctionItems } from "../api/AuctionItem/useGetAllAuctionItems";
import type { Item } from "../types/AuctionItem";
import { AuctionItem } from "../components/auctionItem/AuctionItem";

export const AuctionItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    useGetAllAuctionItems().then(setItems).catch(console.error);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.auctionItems}>
        <div className={styles.container}>
          <h1>Find Tractor you need</h1>
          <div className={styles.auctionList}>
            {items.length > 0 ? (
              items.map((item) => <AuctionItem key={item.id} {...item} />)
            ) : (
              <p>Loading tractors...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
