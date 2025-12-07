import React from "react";
import { PaymentForm } from "../components/paymentForm/paymentForm";
import type { Status } from "../types/Payment";

export const PaymentPage = () => {
  const handlePaymentSubmit = (amount: number, status: Status) => {
    console.log("Payment submitted:", { amount, status });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <PaymentForm onSubmit={handlePaymentSubmit} />
    </div>
  );
};
