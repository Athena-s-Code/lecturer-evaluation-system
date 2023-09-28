import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    user: {},
    jwt:""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state,action) => {
          state.isLogged = true;
          state.user = action.payload.user;
          state.jwt = action.payload.jwt
    },
  },
});


export const userActions = userSlice.actions;

export default userSlice;
