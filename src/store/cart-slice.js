import { createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/http";

const REACT_APP_ADDITEM_TO_CART = process.env.REACT_APP_ADDITEM_TO_CART;
const REACT_APP_REMOVEITEM_FROM_CART =
  process.env.REACT_APP_REMOVEITEM_FROM_CART;

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
        tPrice += item.totalPrice;
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
          price: newItem.totalPrice,
          totalPrice: newItem.totalPrice,
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
      const existItem = state.items.find((item) => item.id === newItemId);
      state.totalPrice -= existItem.price;
      console.log(existItem);
      if (existItem.qty === 1) {
        console.log("hi");
        state.items = state.items.filter((item) => item.id !== newItemId);
      } else {
        existItem.qty--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
  },
});

export const fetchCartItems = () => {
  return async (dispatch) => {
    const cartData = await api.get(REACT_APP_ADDITEM_TO_CART);
    console.log(cartData);
    let cartLength = 0;
    cartData?.data?.forEach((item) => (cartLength += item.qty));
    dispatch(updatecart({ items: cartData?.data, totalQty: cartLength }));
  };
};

export const sendCartItem = (prodDetail) => {
  console.log(prodDetail);
  const { id, totalPrice, title, image, price } = prodDetail;

  return async (dispatch) => {
    try {
      const response = await api.post(REACT_APP_ADDITEM_TO_CART, {
        item: prodDetail,
      });
      if (response.status === 201) {
        dispatch(addItem({ id, totalPrice, title, image, price }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeItemFromCart = (itemId) => {
  return async (dispatch) => {
    try {
      const response = await api.post(REACT_APP_REMOVEITEM_FROM_CART, {
        id: itemId,
      });
      console.log(response);
      if (response.status === 201) {
        dispatch(removeItem(itemId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addItem, removeItem, updatecart } = cartItem.actions;
export default cartItem.reducer;
