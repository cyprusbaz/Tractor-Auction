import React from "react";
import { RegisterForm } from "../components/registrationForm/RegisterForm";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};
