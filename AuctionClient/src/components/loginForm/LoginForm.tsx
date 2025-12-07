import React, { useState } from "react";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    // Call your API to login the user
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.name}>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};
