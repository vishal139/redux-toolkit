import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import ProductReducer from './ProductSlice'

const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: ProductReducer,
  },
});

export default store;