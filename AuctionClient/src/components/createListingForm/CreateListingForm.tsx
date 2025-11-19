import type React from "react";
import styles from "./CreateListingForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateAuctionListing } from "../../api/AuctionListing/CreateAuctionListing";
import type { AuctionListingCreation } from "../../types/AuctionListing";

export const CreateListingForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const listing: AuctionListingCreation = {
      name: name,
      startDate: start,
      endDate: end,
      userId: "34ebed82-73f5-424a-91ef-14b4c2e66740",
    };

    console.log(listing);

    CreateAuctionListing(listing)
      .then(() => {
        navigate("/AuctionListings");
      })
      .catch(console.error);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setName(e.target.value);
    }
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setStart(e.target.value);
    }
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setEnd(e.target.value);
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.name}>Upload Tractor to Auction</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
          required
        />

        <label htmlFor="start_date">Start Date:</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          onChange={handleStartDateChange}
          required
        />

        <label htmlFor="end_date">End Date:</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          onChange={handleEndDateChange}
          required
        />

        <button type="submit" className={styles.button}>
          Upload Car
        </button>
      </form>
    </div>
  );
};
