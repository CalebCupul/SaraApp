import { API_BASE_URL } from "@env";
import axios from "axios";

export const getRecords = async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/asistencias?page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
