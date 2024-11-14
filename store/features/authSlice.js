import {createSlice} from "@reduxjs/toolkit";
import {getItem} from "../../utils/AsyncStorage";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    user: getItem('token'),
  },
  reducers: {
    login: (state, actions) => {
      return {...state, user: actions.payload};
    },
    logout: () => {
      return {};
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
