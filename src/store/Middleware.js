export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type == "cartItems/addItem" ||
    action.type == "cartItems/removeItem" ||
    action.type == "cartItems/updatecart"
  ) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }
  return result;
};
