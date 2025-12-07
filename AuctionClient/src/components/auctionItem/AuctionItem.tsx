import React from "react";
import styles from "./AuctionItem.module.css";
import type { Item } from "../../types/AuctionItem";
import { DeleteAuctionItem } from "../../api/AuctionItem/DeleteAuctionItem";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  brand: string;
  model: string;
  year: Number;
  mileage: Number;
  color: string;
  engine: string;
  description: string;
  attachment: string;
  price: Number;
  imageUrl: string;
  onDelete: (id: string) => void;
}

export const AuctionItem: React.FC<Props> = ({
  id,
  brand,
  model,
  year,
  mileage,
  color,
  engine,
  description,
  attachment,
  price,
  imageUrl,
  onDelete,
}) => {
  const navigate = useNavigate();
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    try {
      console.log(id);
      if (id) {
        await DeleteAuctionItem(id);
        onDelete(id);
      }
    } catch {
      throw new Error("Could not delete this tractor");
    }
  };

  const handleEdit = () => {
    navigate(`/EditItem/${id}`);
  };

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
      <p>Attachment: {attachment}</p>
      <p>Starting price: {price.toString()}</p>
      <img
        src={`${import.meta.env.VITE_BASE_URL}${imageUrl}`}
        alt="tractor image"
      />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleEdit}>
          Edit
        </button>
        <button className={styles.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
