import React from "react";
import styles from "./AuctionItem.module.css";
import type { Item } from "../../types/AuctionItem";

export const AuctionItem: React.FC<Item> = ({
  brand,
  model,
  year,
  mileage,
  color,
  engine,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className={styles.auctionItem}>
      <h1>
        {brand} {model}
      </h1>
      <h2>Year: {year.toString()}</h2>
      <h2>Mileage: {mileage.toString()}</h2>
      <h2>Color: {color}</h2>
      <h2>Engine: {engine}</h2>
      <p>Description: {description}</p>
      <p>Starting price: {price.toString()}</p>
      <img
        src={`${import.meta.env.VITE_BASE_URL}${imageUrl}`}
        alt="tractor image"
      />
    </div>
  );
};
