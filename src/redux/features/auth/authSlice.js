import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(payload));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;

//selectors
export const selectToken = (state) => state.auth?.token;
export const selectUser = (state) => state.auth?.user;
export const selectUserRole = (state) => state.auth.user?.user_role;
