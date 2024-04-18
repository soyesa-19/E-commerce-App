import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartItem = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    updatecart(state, action) {
      state.items = action.payload.items;
      state.totalQty = action.payload.totalQty;
    },
    addItem(state, action) {
      state.totalQty++;
      const newItem = action.payload;
      state.totalPrice += newItem.price;
      console.log(action.payload);
      const isItemExist = state.items.find((item) => item.id === newItem.id);
      console.log(isItemExist);
      if (!isItemExist) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          qty: 1,
        });
      } else {
        isItemExist.totalPrice = isItemExist.totalPrice + newItem.price;
        isItemExist.qty++;
      }
    },

    removeItem(state, action) {
      state.totalQty--;
      const newItemId = action.payload;
      console.log(newItemId);
      const existItem = state.items.find((item) => item.id === newItemId.id);
      state.totalPrice -= existItem.price;
      console.log(existItem);
      if (existItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== newItemId.id);
      } else {
        existItem.qty--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
  },
});

export const { addItem, removeItem, updatecart } = cartItem.actions;
export default cartItem.reducer;
