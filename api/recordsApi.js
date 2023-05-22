import { API_BASE_URL } from "@env";
import axios from "axios";

export const getRecords = async (page = 1, token, code) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${code}/asistencias`,
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

export const createRecord = async (token, event_id, code) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/asistencias`,
      {
        event_id: event_id,
        code: code,
      },
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
}

