import {createSlice} from "@reduxjs/toolkit";
import {getCookie} from "cookies-next";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: getCookie('user') && JSON.parse(getCookie('user')),
  },
  reducers: {
    saveProfile: (state, {payload}) => {
      state.profile = payload;
    },
    clearProfile: (state) => {
      state.profile = {};
    },
    returnProfile: (state) => {
      state.profile;
    }
  },
});

export const {saveProfile, clearProfile, returnProfile} = profileSlice.actions;
export default profileSlice.reducer;
