import { createSlice } from "@reduxjs/toolkit";
import randomstring from "randomstring";
import { clearData, getData, setData } from "../../utils/getAndSetData";

const initialState = {
  user: null,
  token: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const isUser = getData("isUser");
      if (isUser && isUser !== null) {
        const token = randomstring.generate({
          length: 30,
          charset: ["alphanumeric", "!", "hex"],
        });
        state.user = {
          name: "Sourav Roy",
          role: isUser === "1" ? "ADMIN" : "USER",
          email: "sroy3166@gmail.com",
        };
        state.token = token;
      } else {
        state.user = null;
        state.token = null;
      }
    },

    login: (state, action) => {
      let role = action.payload.role ? "ADMIN" : "USER";
      const token = randomstring.generate({
        length: 30,
        charset: ["alphanumeric", "!", "hex"],
      });
      state.user = {
        name: "Sourav Roy",
        role: role,
        email: "sroy3166@gmail.com",
      };
      setData("isUser", action.payload?.role || "0");
      state.token = token;
    },

    logout: (state, action) => {
      state.user = null;
      state.token = null;
      clearData("isUser");
    },
  },
});

export const { login, logout, loadUser } = userReducer.actions;

export default userReducer.reducer;
