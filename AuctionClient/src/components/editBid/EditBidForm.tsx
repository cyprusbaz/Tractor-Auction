import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditBidForm.module.css";
import { useEffect, useState } from "react";
import type { Bid } from "../../types/Bid";
import { GetBidById } from "../../api/Bid/GetBidById";
import { UpdateBid } from "../../api/Bid/UpdateBid";

export const EditBidForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<Bid>({
    id: "",
    amount: 0,
    timestamp: "",
    isWinner: false,
    bidderId: "",
    auctionItemId: "",
  });

  useEffect(() => {
    const loadBid = async () => {
      if (!id) return;

      const data = await GetBidById(id);

      setForm({
        id: data.id,
        amount: data.amount,
        timestamp: data.timestamp,
        isWinner: data.isWinner,
        bidderId: data.bidderId,
        auctionItemId: data.auctionItemId,
      });
    };

    loadBid();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      setForm((prev) => ({
        ...prev,
        [name]: value === "" ? 0 : Number(value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const timestamp =
      form.timestamp.length === 16 ? form.timestamp + ":00" : form.timestamp;

    const bid: Bid = {
      ...form,
      timestamp,
    };

    await UpdateBid(bid);
    navigate("/Admin");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleUpload}>
        <h2>Edit Bid</h2>

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <label>Timestamp:</label>
        <input
          type="datetime-local"
          name="timestamp"
          value={form.timestamp ? form.timestamp.slice(0, 16) : ""}
          onChange={handleChange}
          required
        />

        <label>Winner:</label>
        <select
          name="isWinner"
          value={form.isWinner ? "true" : "false"}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              isWinner: e.target.value === "true",
            }))
          }
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};
