import React, { useEffect, useState } from "react";
import styles from "./BidsTable.module.css";
import { useNavigate } from "react-router-dom";
import type { Bid } from "../../types/Bid";
import { DeleteBid } from "../../api/Bid/DeleteBid";
import { GetAllBid } from "../../api/Bid/GetAllBids";

export const BidsTable = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllBid();
        setBids(data);
      } catch {
        throw new Error("could not find the bids");
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await DeleteBid(id);

      setBids((prev) => prev.filter((bid) => bid.id !== id));
    } catch {
      throw new Error("could not delete the user");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/EditBid/${id}`);
  };
  return (
    <div className={styles.tableContainer}>
      <h2>Bids</h2>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Is winner</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.id}>
              <td>{bid.amount}</td>
              <td>{String(bid.isWinner)}</td>
              <td>{new Date(bid.timestamp).toLocaleString()}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleEdit(bid.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(bid.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {bids.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No bids found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
