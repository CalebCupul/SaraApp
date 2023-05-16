import { API_BASE_URL } from "@env";
import axios from "axios";

export const getRecords = async (page = 1, token, email) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/asistencias?page=${page}&email=${email}`,
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

export const downloadRecord = async (token, id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/asistencias/download/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/pdf',
        },
        responseType: 'blob'
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

