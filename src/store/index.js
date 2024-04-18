import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products_slice";
import cartItem from "./cart-slice";

const store = configureStore({
  reducer: { products: productsSlice, cart: cartItem },
});

export default store;
