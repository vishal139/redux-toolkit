import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    products: CartReducer,
  },
});

export default store;