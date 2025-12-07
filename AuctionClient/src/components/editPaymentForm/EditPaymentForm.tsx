import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditPaymentForm.module.css";
import type { Payment, Status } from "../../types/Payment";
import { GetPaymentById } from "../../api/Payment/GetPaymentById";
import { UpdatePayment } from "../../api/Payment/UpdatePayment";

export const EditPaymentForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [payment, setPayment] = useState<Payment | null>(null);

  useEffect(() => {
    const fetchPayment = async () => {
      if (!id) return;
      const data = await GetPaymentById(id);
      setPayment(data);
    };
    fetchPayment();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!payment) return;
    const value = Number(e.target.value) as Status;
    setPayment({ ...payment, status: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!payment) return;
    await UpdatePayment(payment);
    navigate("/Admin");
  };

  if (!payment) return <p>Loading...</p>;

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Edit Payment</h2>

        <label>Amount:</label>
        <input type="number" value={payment.amount} readOnly />

        <label>Status:</label>
        <select value={payment.status} onChange={handleChange}>
          <option value={1}>Pending</option>
          <option value={2}>Failed</option>
          <option value={3}>Completed</option>
        </select>

        <button type="submit" className={styles.button}>
          Update Payment
        </button>
      </form>
    </div>
  );
};
