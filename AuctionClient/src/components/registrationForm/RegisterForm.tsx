import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import type { UserCreation } from "../../types/User";
import { CreateUser } from "../../api/User/CreateUser";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: UserCreation = {
      name: name,
      surname: surname,
      email: email,
      username: username,
      address: address,
      phone: phone,
      password: password,
    };

    try {
      await CreateUser(user);
      navigate("/");
    } catch {
      throw new Error("cannot create user");
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.name}>Register</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          Register
        </button>
      </form>
    </div>
  );
};
