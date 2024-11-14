import authReducer from "@/store/features/authSlice";
import cartReducer from "@/store/features/cartSlice";
import profileReducer from "@/store/features/profileSlice";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
});
