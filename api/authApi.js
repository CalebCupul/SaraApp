import { API_BASE_URL } from "@env";
import axios from "axios";

export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      name: 'bla22222',
      email: 'bla22222@gmail.com',
      password: 'password123',
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const getUserInfo = async (token) => {
//     try {
//       const response = await axios.get("https://www.googleapis.com/userinfo/v2/me", {headers: {Authorization: `Bearer ${token}`}});
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
