import type { User } from "../../types/User";
import { apiClient } from "../AxiosInstace";

export const GetAllUsers = async (): Promise<User[]> => {
  try {
    const res = await apiClient.get("User/GetAll");
    return res.data;
  } catch {
    throw new Error("Could not retrieve auction items");
  }
};
