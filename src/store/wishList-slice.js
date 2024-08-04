import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("wishlist") || {
  items: [],
  qty: 0,
};

const wishListSlice = createSlice({
  name: "wishListItems",
  initialState,
  reducers: {
    addWishListItem(state, action) {
      state.qty++;
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeWishListItem(state, action) {
      state.qty--;
      const deletedItemId = action.payload;
      state.items = state.items.filter((item) => item.id !== deletedItemId.id);
    },
    clearWishlist(state, action) {
      state.qty = 0;
      state.items = [];
    },
  },
});

export const { addWishListItem, removeWishListItem, clearWishlist } =
  wishListSlice.actions;
export default wishListSlice.reducer;
