import { useNavigate } from "react-router-dom";
import { RemoveAuctionListing } from "../../api/AuctionListing/RemoveAuctionListing";
import type { AuctionListing } from "../../types/AuctionListing";
import styles from "./auctionListing.module.css";

import React from "react";

interface Props {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  onDelete: (id: string) => void;
}

export const AuctionListingCard: React.FC<Props> = ({
  id,
  name,
  startDate,
  endDate,
  onDelete,
}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const navigate = useNavigate();

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    try {
      RemoveAuctionListing(id);
      onDelete(id);
    } catch {}
  };

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
      <span>{name}</span>
      <span>Start Date: {formatedStart}</span>
      <span>End Date: {formatedEnd}</span>
      <button
        className={styles.view_btn}
        onClick={() => navigate(`/AuctionItems/${id}`)}
      >
        All tractors
      </button>
      <button className={styles.edit_btn}>Edit</button>
      <button className={styles.remove_btn} onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};
