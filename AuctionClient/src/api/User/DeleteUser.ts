import { apiClient } from "../AxiosInstace";

export const DeleteUser = async (id: string): Promise<void> => {
  try {
    await apiClient.delete("User/Delete", {
      data: {
        id,
      },
    });
  } catch {
    throw new Error("Could not delete the user");
  }
};
