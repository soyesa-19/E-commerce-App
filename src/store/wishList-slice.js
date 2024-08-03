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
      console.log(deletedItemId);
      const re = state.items.filter((item) => item.id !== deletedItemId.id);
      state.items = re;
    },
  },
});

export const { addWishListItem, removeWishListItem } = wishListSlice.actions;
export default wishListSlice.reducer;
