import { API_BASE_URL } from "@env";
import axios from "axios";

export const getRecords = async (page = 1, token) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/asistencias?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
