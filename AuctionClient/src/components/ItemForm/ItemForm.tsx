import React, { useState } from "react";
import styles from "./ItemForm.module.css";
import { type UploadItem } from "../../types/AuctionItem";
import { UploadAuctionItem } from "../../api/AuctionItem/CreateAuctionItem";

export const ItemForm = () => {
  const [form, setForm] = useState<UploadItem>({
    brand: "",
    model: "",
    year: 1900,
    mileage: 0,
    color: "",
    engine: "",
    description: "",
    price: 0,
    image: null,
    auctionListingId: "77E7F2FE-7A76-4977-9EB6-087238EC2F59",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, image: file }));
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    try {
      await UploadAuctionItem(form);

      setForm({
        brand: "",
        model: "",
        year: 1900,
        mileage: 0,
        color: "",
        engine: "",
        description: "",
        price: 0,
        image: null,
        auctionListingId: "77e7f2fe-7a76-4977-9eb6-087238ec2f59",
      });
    } catch {
      console.log("Failed to upload tractor");
    }
  };
  return (
    <div className={styles.form}>
      <form
        action="#"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleUpload}
      >
        <h2 className={styles.name}>Upload Tractor to Auction</h2>

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="e.g., Lamborghini"
          required
          onChange={handleChange}
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="e.g., Trattori"
          required
          onChange={handleChange}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          min="1900"
          max="2025"
          required
          onChange={handleChange}
        />

        <label htmlFor="mileage">Mileage (km):</label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          required
          onChange={handleChange}
        />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          required
          onChange={handleChange}
        />

        <label htmlFor="engine">Engine:</label>
        <input
          type="text"
          id="engine"
          name="engine"
          required
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Add any details about the car..."
          required
          onChange={handleChange}
        ></textarea>

        <label htmlFor="price">Starting Price ($):</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          onChange={handleChange}
        />

        <label htmlFor="images">Upload Images:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFile}
          required
        />

        <button type="submit" className={styles.button}>
          Upload Tractor
        </button>
      </form>
    </div>
  );
};
