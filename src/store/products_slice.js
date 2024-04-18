import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    filteredItems: [],
  },
  reducers: {
    addProducts(state, actions) {
      console.log(actions.payload);
      state.items = [...actions.payload];
    },
    addFilteredProducts(state, actions) {
      console.log(actions.payload);
      state.filteredItems = [...actions.payload];
    },
  },
});

export const { addProducts, addFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
