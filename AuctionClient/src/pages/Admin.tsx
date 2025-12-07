import React from "react";
import { UsersTable } from "../components/usersTable/UsersTable";
import { BidsTable } from "../components/bidsTable/BidsTable";
import { PaymentsTable } from "../components/paymentTable/PaymentTable";

export const Admin = () => {
  return (
    <div>
      <UsersTable />
      <br />
      <BidsTable />
      <br />
      <PaymentsTable />
    </div>
  );
};
