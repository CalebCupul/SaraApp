import { API_BASE_URL } from "@env";
import axios from "axios";

export const getUser = async (token, id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
