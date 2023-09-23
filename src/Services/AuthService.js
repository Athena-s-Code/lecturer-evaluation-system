import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:8000/auth";

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      
      if (response.data.jwt) {
        const decodedString = JSON.stringify(jwtDecode(response.data.jwt));
        const decodedToken = JSON.parse(decodedString);
        console.log(decodedToken );
        localStorage.setItem("user", decodedToken);
      }
    } catch (error) {
      throw error;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    return axios.post(`${API_URL}/register`, {
      username,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
