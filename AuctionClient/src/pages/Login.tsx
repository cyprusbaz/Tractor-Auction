import React from "react";
import { LoginForm } from "../components/loginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};
