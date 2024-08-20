import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products_slice";
import cartItem from "./cart-slice";
import wishListSlice from "./wishList-slice";
import buyNowSlice from "./buyNow-slice";
import { localStorageMiddleware, localStorageWishlist } from "./Middleware";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartItem,
    wishList: wishListSlice,
    buyNow: buyNowSlice,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(
      localStorageMiddleware,
      localStorageWishlist
    );
  },
});

export default store;
