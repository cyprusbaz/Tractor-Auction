import React, { useEffect, useState } from "react";
import styles from "./AuctionItems.module.css";
import { useGetAllAuctionItems } from "../api/AuctionItem/useGetAllAuctionItems";
import type { Item } from "../types/AuctionItem";
import { AuctionItem } from "../components/auctionItem/AuctionItem";
import { useParams } from "react-router-dom";
import { GetAllAuctionItemsByListingId } from "../api/AuctionItem/GetAllAuctionItemsByListingId";
import { useNavigate } from "react-router-dom";

export const AuctionItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { listingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let data: Item[] = [];
        if (listingId) {
          data = await GetAllAuctionItemsByListingId(listingId);
        } else {
          data = await useGetAllAuctionItems();
        }
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, [listingId]);

  return (
    <div className={styles.body}>
      <div className={styles.auctionItems}>
        <div className={styles.container}>
          <h1>Find Tractor you need</h1>
          <button
            className={styles.create_Btn}
            onClick={() => {
              navigate("/UploadItem");
            }}
          >
            Add Tractor
          </button>
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
