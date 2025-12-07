import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateAuctionListing } from "../../api/AuctionListing/UpdateAuctionListing";
import { GetAuctionListingById } from "../../api/AuctionListing/GetAuctionListingById";
import type { AuctionListing } from "../../types/AuctionListing";
import styles from "./EditAuctionListingForm.module.css";

export const EditAuctionListingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<AuctionListing>({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const loadListing = async () => {
      if (!id) return;

      const data = await GetAuctionListingById(id);
      setForm({
        id: data.id,
        name: data.name,
        startDate: data.startDate.split("T")[0],
        endDate: data.endDate.split("T")[0],
      });
    };

    loadListing();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.id) return;

    const data: AuctionListing = {
      id: form.id,
      name: form.name,
      startDate: new Date(form.startDate).toISOString(),
      endDate: new Date(form.endDate).toISOString(),
    };

    await UpdateAuctionListing(data);

    navigate("/AuctionListings");
  };

  return (
    <div className={styles.form}>
      <h2>Edit Auction Listing</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Listing</button>
      </form>
    </div>
  );
};
