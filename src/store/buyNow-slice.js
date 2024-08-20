import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const buyNowSlice = createSlice({
  name: "buyNow",
  initialState,
  reducers: {
    addBuyNowItems(state, action) {
      console.log(action.payload);
      state.items = action.payload;
      let sum = 0;
      action.payload.forEach((element) => {
        sum += element.price;
      });
      state.totalPrice = sum;
    },
    removeBuyNowItem(state, action) {
      state.items = [];
    },
  },
});

export const { addBuyNowItems, removeBuyNowItem } = buyNowSlice.actions;

export default buyNowSlice.reducer;
