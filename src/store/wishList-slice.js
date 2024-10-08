import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../services/axios/http";

const initialState = {
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
        dispatch(updateWhishlist(response?.data?.whishlistProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendWhishlistItem = (item) => {
  console.log(item);

  return async (dispatch) => {
    const { id } = item;
    dispatch(addWishListItem(item));
    console.log("item added to store cart");
    try {
      const response = await api.post("/api/whishlist", { item });

      if (response.status === 201) {
        console.log("Backend updated successfully");
        toast.success("Item added to whishlist!", {
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
      dispatch(removeWishListItem(id));
      toast.error("Cannot add item to whishlist!", {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };
};

export const deleteWhishlistItem = ({ id, title, image, price }) => {
  return async (dispatch) => {
    if (id) {
      dispatch(removeWishListItem(id));
    } else {
      dispatch(clearWishlist());
    }
    try {
      const response = await api.post("/api/whishlist/delete", { id });

      if (response.status === 201) {
        console.log("Backend updated successfully");
        toast.success("Item removed from whishlist!", {
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
      if (id) {
        dispatch(addWishListItem({ id, title, image, price }));
        toast.error("Cannot remove item from whishlist!", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(error);
    }
  };
};
