import { userActions } from "../slices/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:8000/auth";

export const userLoginFunction = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
    //  console.log(response.data);

      if (response.data.jwt) {
          dispatch(userActions.userLogin({ user: response.data.user, jwt: response.data.jwt } ));

        const decodedString = JSON.stringify(jwtDecode(response.data.jwt));
        const decodedToken = JSON.parse(decodedString);
        console.log(decodedToken);
        localStorage.setItem("user", decodedToken);
      }
    } catch (error) {
      throw error;
    }
  };
};
