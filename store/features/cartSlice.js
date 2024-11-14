import { createSlice } from "@reduxjs/toolkit";
import {getCookie} from "cookies-next";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: getCookie('cart'),
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cartItem = state.push(actions.payload);
    },
    removeToCart: (state, actions) => {
      state.cartItem = state.filter(item => item.id !== actions.payload.id);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
