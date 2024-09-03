import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartItem = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    updatecart(state, action) {
      let tPrice = 0;
      console.log(action.payload);
      state.items = action.payload.items;
      state.totalQty = action.payload.totalQty;
      action.payload.items.forEach((item) => {
        tPrice += item.price;
      });
      state.totalPrice = tPrice;
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
          image: newItem.image,
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

export const fetchCartItems = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:5000/api/cartProds");
    const cartData = await response.json();
    console.log(cartData);
    dispatch(updatecart({ items: cartData, totalQty: cartData.length }));
  };
};

export const sendCartItem = (prodDetail) => {
  console.log(prodDetail);
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:5000/api/cartProds", {
        item: prodDetail,
      });
    } catch (error) {
      console.log(error);
    }
    const { id, price, title, image } = prodDetail;
    dispatch(addItem({ id, price, title, image }));
  };
};

export const { addItem, removeItem, updatecart } = cartItem.actions;
export default cartItem.reducer;
