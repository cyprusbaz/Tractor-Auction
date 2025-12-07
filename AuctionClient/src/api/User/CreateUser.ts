import type { UserCreation, User } from "../../types/User";
import { apiClient } from "../AxiosInstace";

export const CreateUser = async (user: UserCreation): Promise<void> => {
  try {
    await apiClient.post("User/Create", user);
  } catch {
    throw new Error("Could not delete the user");
  }
};
