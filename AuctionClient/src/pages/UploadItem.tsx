import React from "react";
import styles from "./UploadItem.module.css";

export const UploadItem = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form
          action="#"
          method="POST"
          encType="multipart/form-data"
          className={styles.form}
        >
          <h2 className={styles.name}>Upload Tractor to Auction</h2>

          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            placeholder="e.g., Lamborghini"
            required
          />

          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="e.g., Trattori"
            required
          />

          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            min="1900"
            max="2025"
            required
          />

          <label htmlFor="mileage">Mileage (km):</label>
          <input type="number" id="mileage" name="mileage" required />

          <label htmlFor="price">Starting Price ($):</label>
          <input type="number" id="price" name="price" step="0.01" required />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Add any details about the car..."
            required
          ></textarea>

          <label htmlFor="images">Upload Images:</label>
          <input
            type="file"
            id="images"
            name="images[]"
            accept="image/*"
            multiple
            required
          />

          <label htmlFor="auctionStart">Auction Start Date:</label>
          <input type="date" id="auctionStart" name="auctionStart" required />

          <label htmlFor="auctionEnd">Auction End Date:</label>
          <input type="date" id="auctionEnd" name="auctionEnd" required />

          <button type="submit" className={styles.button}>
            Upload Car
          </button>
        </form>
      </div>
    </div>
  );
};
