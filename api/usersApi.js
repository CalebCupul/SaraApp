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

export const editUser = async (token, id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
