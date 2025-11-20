import React from "react";
import styles from "./UploadItem.module.css";
import { ItemForm } from "../components/ItemForm/ItemForm";

export const UploadItem = () => {
  return (
    <div className={styles.container}>
      <ItemForm />
    </div>
  );
};
