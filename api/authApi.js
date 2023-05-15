import { API_BASE_URL } from "@env";
import axios from "axios";

export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      name: 'aa',
      email: 'aa@gmail.com',
      password: 'password123',
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};