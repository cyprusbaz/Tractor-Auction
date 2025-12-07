import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetUserById } from "../../api/User/GetUserById";
import type { User } from "../../types/User";
import styles from "./EditUserForm.module.css";
import { UpdateUser } from "../../api/User/UpdateUser";

export const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [form, setForm] = useState<User>({
    id: "",
    name: "",
    surname: "",
    email: "",
    username: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      if (!id) return;

      const data = await GetUserById(id);
      setForm({
        id: data.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
        username: data.username,
        address: data.address,
        phone: data.phone,
      });
    };

    loadUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.id) return;

    await UpdateUser(form);

    navigate("/Admin");
  };

  return (
    <div className={styles.form}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};
