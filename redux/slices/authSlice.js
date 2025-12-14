// import { createSlice } from "@reduxjs/toolkit";
// import { setCookie, deleteCookie } from "cookies-next";

// const initialState = {
//   token: null,
//   user: null,
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       const { token, user } = action.payload;
//       state.token = token;
//       state.user = user;
//       state.isAuthenticated = true;
//       setCookie("token", token); 
//     },

//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       state.isAuthenticated = false;
//       deleteCookie("token");
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;


// redux/slices/authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie } from "cookies-next";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      setCookie("token", token); // store token in cookie
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      deleteCookie("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
