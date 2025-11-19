import type { AuctionListing } from "../../types/AuctionListing";
import styles from "./auctionListing.module.css";

import React from "react";

export const AuctionListingCard: React.FC<AuctionListing> = ({
  name,
  startDate,
  endDate,
}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const formatedStart = start.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formatedEnd = end.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.auctionListing}>
      <h1>{name}</h1>
      <h2>Start Date: {formatedStart}</h2>
      <h2>End Date: {formatedEnd}</h2>
    </div>
  );
};
