import React, { useState, useEffect } from "react";
import styles from "./ItemForm.module.css";
import { type UploadItem } from "../../types/AuctionItem";
import { UploadAuctionItem } from "../../api/AuctionItem/CreateAuctionItem";
import { GetAllAuctionListings } from "../../api/AuctionListing/GetAllAuctionListings";
import { useNavigate } from "react-router-dom";
import type { AuctionListing } from "../../types/AuctionListing";

export const ItemForm = () => {
  const navigate = useNavigate();

  const [listings, setListings] = useState<AuctionListing[]>([]);

  const [form, setForm] = useState<UploadItem>({
    brand: "",
    model: "",
    year: 1900,
    mileage: 0,
    color: "",
    engine: "",
    description: "",
    attachment: "",
    price: 0,
    image: null,
    auctionListingId: "",
  });

  useEffect(() => {
    GetAllAuctionListings().then(setListings).catch(console.error);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    try {
      await UploadAuctionItem(form);
      navigate("/AuctionItems");
    } catch {
      console.log("Failed to upload tractor");
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <h2 className={styles.name}>Upload Tractor to Auction</h2>

        <label htmlFor="auctionListingId">Select Auction Listing:</label>
        <select
          id="auctionListingId"
          name="auctionListingId"
          required
          value={form.auctionListingId}
          onChange={handleChange}
        >
          <option value="">-- Choose listing --</option>

          {listings.map((listing) => (
            <option key={listing.id} value={listing.id}>
              {listing.name}
            </option>
          ))}
        </select>

        {/* rest of the form: */}
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" required onChange={handleChange} />

        <label htmlFor="model">Model:</label>
        <input type="text" name="model" required onChange={handleChange} />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          name="year"
          min="1900"
          max="2025"
          required
          onChange={handleChange}
        />

        <label htmlFor="mileage">Mileage (km):</label>
        <input type="number" name="mileage" required onChange={handleChange} />

        <label htmlFor="color">Color:</label>
        <input type="text" name="color" required onChange={handleChange} />

        <label htmlFor="engine">Engine:</label>
        <input type="text" name="engine" required onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows={4}
          required
          onChange={handleChange}
        ></textarea>

        <label htmlFor="description">Attachment:</label>
        <textarea
          name="attachment"
          rows={4}
          required
          onChange={handleChange}
        ></textarea>

        <label htmlFor="price">Starting Price ($):</label>
        <input type="number" name="price" required onChange={handleChange} />

        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          required
          onChange={handleFile}
        />

        <button type="submit" className={styles.button}>
          Upload Tractor
        </button>
      </form>
    </div>
  );
};
