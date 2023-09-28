import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
