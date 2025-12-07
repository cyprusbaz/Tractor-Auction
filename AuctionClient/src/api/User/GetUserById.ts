import { apiClient } from "../AxiosInstace";
import type { User } from "../../types/User";

export const GetUserById = async (id: string): Promise<User> => {
  try {
    const res = await apiClient.get("User/GetById", { params: { id } });
    return res.data;
  } catch {
    throw new Error("Could not retrieve user");
  }
};
