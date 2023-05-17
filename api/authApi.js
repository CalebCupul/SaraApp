import { API_BASE_URL } from "@env";
import axios from "axios";

export const createUser = async (name, code, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      name: name,
      code: code,
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};