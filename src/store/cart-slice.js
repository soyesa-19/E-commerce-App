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
          title: newItem.title,
          price: newItem.price,
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
    try {
      const cartData = await api.get(REACT_APP_ADDITEM_TO_CART);
      console.log(cartData);
      let cartLength = 0;
      cartData?.data?.forEach((item) => (cartLength += item.qty));
      dispatch(updatecart({ items: cartData?.data, totalQty: cartLength }));
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };
};

export const sendCartItem = (prodDetail) => {
  console.log(prodDetail);

  return async (dispatch) => {
    const { id, title, image, price } = prodDetail;
    dispatch(addItem({ id, title, image, price }));
    try {
      const response = await api.post(REACT_APP_ADDITEM_TO_CART, {
        item: prodDetail,
      });
      if (response.status === 201) {
        console.log("Backend updated successfully");
      }
    } catch (error) {
      dispatch(removeItem(id));
      alert(
        "Something went wrong, backend cannot be updated, item cannot be added to cart"
      );
      console.log(error);
    }
  };
};

export const removeItemFromCart = (item) => {
  return async (dispatch) => {
    const { id, totalPrice, title, image, price } = item;
    dispatch(removeItem(id));
    try {
      const response = await api.post(REACT_APP_REMOVEITEM_FROM_CART, {
        id,
      });
      console.log(response);
      if (response.status === 201) {
        console.log("Item removed from backend cart");
      }
    } catch (error) {
      dispatch(addItem({ id, totalPrice, title, image, price }));
      alert("backend could not be updated properly");
      console.log(error);
    }
  };
};

export const { addItem, removeItem, updatecart } = cartItem.actions;
export default cartItem.reducer;
