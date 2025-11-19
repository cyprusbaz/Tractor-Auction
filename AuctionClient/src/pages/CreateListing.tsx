import { CreateListingForm } from "../components/createListingForm/CreateListingForm";
import styles from "./CreateListing.module.css";

export const CreateListing = () => {
  return (
    <div className={styles.container}>
      <CreateListingForm />
    </div>
  );
};
