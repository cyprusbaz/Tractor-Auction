import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";
import { StatusText, type Payment } from "../../types/Payment";
import { GetAllPayments } from "../../api/Payment/GetAllPayments";
import { DeletePayment } from "../../api/Payment/DeletePayment";

export const PaymentsTable = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await GetAllPayments();
        setPayments(data);
      } catch {
        throw new Error("could not find the payments");
      }
    };

    fetchPayments();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await DeletePayment(id);

      setPayments((prev) => prev.filter((bid) => bid.id !== id));
    } catch {
      throw new Error("could not delete the payment");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/EditPayment/${id}`);
  };
  return (
    <div className={styles.tableContainer}>
      <h2>Payments</h2>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>payment status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.amount}</td>
              <td>{StatusText[payment.status]}</td>
              <td>{new Date(payment.date).toLocaleString()}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleEdit(payment.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(payment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {payments.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No payments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
