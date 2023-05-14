import { API_BASE_URL } from "@env";
import axios from "axios";

export const getEvents = async (page = 1, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/eventos?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
