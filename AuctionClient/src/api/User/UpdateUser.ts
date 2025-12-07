import { apiClient } from "../AxiosInstace";

import type { User } from "../../types/User";

export const UpdateUser = async (user: User): Promise<void> => {
  try {
    await apiClient.put("User/Update", user);
  } catch {
    throw new Error("Could not update user");
  }
};
