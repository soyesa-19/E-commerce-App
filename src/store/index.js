import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products_slice";
import cartItem from "./cart-slice";
import { localStorageMiddleware } from "./Middleware";

const store = configureStore({
  reducer: { products: productsSlice, cart: cartItem },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(localStorageMiddleware);
  },
});

export default store;
