import { createSlice } from "@reduxjs/toolkit";
import api from "../services/axios/http";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || {
  items: [],
  qty: 0,
};

const wishListSlice = createSlice({
  name: "wishListItems",
  initialState,
  reducers: {
    updateWhishlist(state, action) {
      state.items = action.payload;
      state.qty = action.payload.length;
    },
    addWishListItem(state, action) {
      state.qty++;
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeWishListItem(state, action) {
      state.qty--;
      const deletedItemId = action.payload;
      console.log(deletedItemId);
      state.items = state.items.filter((item) => item.id !== deletedItemId);
    },
    clearWishlist(state, action) {
      state.qty = 0;
      state.items = [];
    },
  },
});

export const {
  addWishListItem,
  removeWishListItem,
  clearWishlist,
  updateWhishlist,
} = wishListSlice.actions;
export default wishListSlice.reducer;

export const fetchWishlistItems = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/api/whishlist");
      console.log(response);
      if (response.status === 200) {
        dispatch(updateWhishlist(response?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendWhishlistItem = (item) => {
  console.log(item);
  return async (dispatch) => {
    try {
      const response = await api.post("/api/whishlist", { item });

      if (response.status === 201) {
        dispatch(addWishListItem(item));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteWhishlistItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/whishlist/delete", { id });

      if (response.status === 201) {
        if (id) {
          dispatch(removeWishListItem(id));
        } else {
          dispatch(clearWishlist());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
