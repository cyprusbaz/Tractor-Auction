import React, { useEffect, useState } from "react";
import type { AuctionListing } from "../types/AuctionListing";
import { GetAllAuctionListings } from "../api/AuctionListing/GetAllAuctionListings";
import styles from "./AuctionListings.module.css";
import { AuctionListingCard } from "../components/aucitonListing/AuctionListingCard";
import { useNavigate } from "react-router-dom";

export const AuctionListings = () => {
  const [listings, setListings] = useState<AuctionListing[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetAllAuctionListings().then(setListings).catch(console.error);
  }, []);

  const handleCreateListingButton: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.preventDefault();
    navigate("/CreateListing");
  };

  const handleDelete = (id: string) => {
    setListings((prev) => prev.filter((listing) => listing.id !== id));
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>All the listings</h1>
        <button
          className={styles.create_Btn}
          onClick={handleCreateListingButton}
        >
          Create Listing
        </button>
        <div className={styles.auctionListings}>
          {listings.length > 0 ? (
            listings.map((listing) => (
              <AuctionListingCard
                key={listing.id}
                {...listing}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>Loading Listings ... </p>
          )}
        </div>
      </div>
    </div>
  );
};
