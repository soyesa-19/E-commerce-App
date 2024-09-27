import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/axios/http";

const REACT_APP_ADDITEM_TO_CART = process.env.REACT_APP_ADDITEM_TO_CART;
const REACT_APP_REMOVEITEM_FROM_CART =
  process.env.REACT_APP_REMOVEITEM_FROM_CART;

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
      console.log(action.payload);
      state.items = action.payload.items;
      state.totalQty = action.payload.totalQty;

      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      const newItem = action.payload;
      state.totalQty += newItem.qty;
      state.totalPrice += newItem.price * newItem.qty;
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
          qty: newItem.qty,
          description: newItem.description,
        });
      } else {
        isItemExist.totalPrice =
          isItemExist.totalPrice + newItem.price * newItem.qty;
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
      let totalSum = 0;
      cartData?.data?.forEach((item) => {
        cartLength += item.qty;
        totalSum += item.price * item.qty;
      });
      dispatch(
        updatecart({
          items: cartData?.data,
          totalQty: cartLength,
          totalPrice: totalSum,
        })
      );
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };
};

export const sendCartItem = (prodDetail) => {
  console.log(prodDetail);

  return async (dispatch) => {
    const { id, title, image, price, description, qty = 1 } = prodDetail;
    console.log(qty);
    dispatch(addItem({ id, title, image, price, description, qty }));
    try {
      const response = await api.post(REACT_APP_ADDITEM_TO_CART, {
        item: prodDetail,
      });
      if (response.status === 201) {
        toast.success("Item added to cart successfully!", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("Backend updated successfully");
      }
    } catch (error) {
      dispatch(removeItem(id));
      toast.error(
        "Something went wrong, backend cannot be updated, item cannot be added to cart",
        {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
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
        toast.success("Item removed successfully!", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      dispatch(addItem({ id, totalPrice, title, image, price }));
      toast.error(
        "Something went wrong, backend cannot be updated, item cannot be deleted from cart",
        {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log(error);
    }
  };
};

export const { addItem, removeItem, updatecart } = cartItem.actions;
export default cartItem.reducer;
