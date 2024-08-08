export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === "cartItems/addItem" ||
    action.type === "cartItems/removeItem" ||
    action.type === "cartItems/updatecart"
  ) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }
  return result;
};

export const localStorageWishlist = (store) => (next) => (action) => {
  console.log(action.type);
  const result = next(action);

  if (
    action.type == "wishListItems/addWishListItem" ||
    action.type == "wishListItems/removeWishListItem" ||
    action.type == "wishListItems/clearWishlist"
  ) {
    localStorage.setItem("wishlist", JSON.stringify(store.getState().wishList));
  }
  return result;
};
