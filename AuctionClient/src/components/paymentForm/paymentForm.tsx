import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./PaymentForm.module.css";
import type { Payment, Status } from "../../types/Payment";
import { GetPaymentById } from "../../api/Payment/GetPaymentById";
import { UpdatePayment } from "../../api/Payment/UpdatePayment";

interface PaymentFormProps {
  onSubmit: (amount: number, status: Status) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [status, setStatus] = useState<Status>(2);

  useEffect(() => {
    const fetchPayment = async () => {
      if (!id) return;

      const data = await GetPaymentById(id);
      setPaymentAmount(data.amount);
    };

    fetchPayment();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(paymentAmount, status);

    let payment: Payment = await GetPaymentById(id!);

    payment.status = status;

    await UpdatePayment(payment);

    navigate("/Admin");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Payment Form</h2>

        <label>Amount:</label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
          readOnly
        />

        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(Number(e.target.value) as Status)}
        >
          <option value={2}>Failed</option>
          <option value={3}>Completed</option>
        </select>

        <button type="submit" className={styles.button}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};
