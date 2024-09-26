import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

const buyNowSlice = createSlice({
  name: "buyNow",
  initialState,
  reducers: {
    addBuyNowItems(state, action) {
      console.log(action.payload);
      const { cartItems, totalCartPrice, totalQty } = action.payload;
      state.items = cartItems;
      state.totalPrice = totalCartPrice;
      state.totalQty = totalQty;
    },
    removeBuyNowItem(state, action) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQty = 0;
    },
  },
});

export const { addBuyNowItems, removeBuyNowItem } = buyNowSlice.actions;

export default buyNowSlice.reducer;
