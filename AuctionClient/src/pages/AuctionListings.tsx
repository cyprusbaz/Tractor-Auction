import React, { useEffect, useState } from "react";
import type { AuctionListing } from "../types/AuctionListing";
import { GetAllAuctionListings } from "../api/AuctionListing/GetAllAuctionListings";
import styles from "./AuctionListings.module.css";
import { AuctionListingCard } from "../components/aucitonListing/AuctionListingCard";

export const AuctionListings = () => {
  const [listings, setListings] = useState<AuctionListing[]>([]);

  useEffect(() => {
    GetAllAuctionListings().then(setListings).catch(console.error);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>All the listings</h1>
        <div className={styles.auctionListing}>
          {listings.length > 0 ? (
            listings.map((listing) => (
              <AuctionListingCard key={listing.id} {...listing} />
            ))
          ) : (
            <p>Loading Listings ... </p>
          )}
        </div>
      </div>
    </div>
  );
};
