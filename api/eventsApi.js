import axios from "axios";
import { API_BASE_URL } from "../config/config";

export const getEvents = async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/eventos?page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
