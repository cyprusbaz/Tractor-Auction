import { data, useNavigate, useParams } from "react-router-dom";
import styles from "./EditsItemForm.module.css";
import { useEffect, useState } from "react";
import { GetAuctionItemById } from "../../api/AuctionItem/GetAuctionItemById";
import type { Item } from "../../types/AuctionItem";
import { UpdateAuctionItem } from "../../api/AuctionItem/UpdateAuctionItem";

export const EditItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<Item>({
    brand: "",
    model: "",
    year: 1900,
    mileage: 0,
    color: "",
    engine: "",
    description: "",
    attachment: "",
    price: 0,
    imageUrl: "",
    auctionListingId: "",
  });

  const [numericInputs, setNumericInputs] = useState({
    year: form.year.toString(),
    mileage: form.mileage.toString(),
    price: form.price.toString(),
  });

  useEffect(() => {
    const loadItem = async () => {
      if (!id) return;

      const data = await GetAuctionItemById(id);

      setForm({
        brand: data.brand,
        model: data.model,
        year: data.year,
        mileage: data.mileage,
        color: data.color,
        engine: data.engine,
        description: data.description,
        attachment: data.attachment,
        price: data.price,
        imageUrl: data.imageUrl,
        auctionListingId: data.auctionListingId,
      });
    };

    loadItem();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      if (value === "" || /^[0-9]*$/.test(value)) {
        setNumericInputs((prev) => ({ ...prev, [name]: value }));

        setForm((prev) => ({
          ...prev,
          [name]: value === "" ? prev[name as keyof Item] : Number(value),
        }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item: Item = {
      id: id,
      brand: form.brand,
      model: form.model,
      year: form.year,
      mileage: form.mileage,
      color: form.color,
      engine: form.engine,
      description: form.description,
      attachment: form.attachment,
      price: form.price,
      imageUrl: form.imageUrl,
      auctionListingId: form.auctionListingId,
    };

    await UpdateAuctionItem(item);

    navigate("/AuctionItems");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleUpload}>
        <h2>Edit Auction Item</h2>

        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          required
        />

        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={form.model}
          onChange={handleChange}
          required
        />

        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={numericInputs.year}
          onChange={handleChange}
        />

        <label>Mileage:</label>
        <input
          type="number"
          name="mileage"
          value={numericInputs.mileage}
          onChange={handleChange}
        />

        <label>Color:</label>
        <input
          type="text"
          name="color"
          value={form.color}
          onChange={handleChange}
          required
        />

        <label>Engine:</label>
        <input
          type="text"
          name="engine"
          value={form.engine}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          required
        />

        <label>Attachment:</label>
        <textarea
          name="attachment"
          rows={4}
          value={form.attachment}
          onChange={handleChange}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={numericInputs.price}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};
