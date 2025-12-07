import React, { use, useEffect, useState } from "react";
import styles from "./UsersTable.module.css";
import { type User } from "../../types/User";
import { GetAllUsers } from "../../api/User/GetAllUsers";
import { DeleteUser } from "../../api/User/DeleteUser";
import { useNavigate } from "react-router-dom";

export const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllUsers();
        setUsers(data);
      } catch {
        throw new Error("could not find the users");
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await DeleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch {
      throw new Error("could not delete the user");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/EditUser/${id}`);
  };
  return (
    <div className={styles.tableContainer}>
      <h2>Users</h2>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleEdit(user.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
