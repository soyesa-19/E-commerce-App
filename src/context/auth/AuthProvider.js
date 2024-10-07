import { createContext, useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useDispatch } from "react-redux";
import { updatecart } from "../../store/cart-slice";
import { updateWhishlist } from "../../store/wishList-slice";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      setIsAuthenticated(authState?.isAuthenticated);
    }
  }, [authState]);

  const logout = async () => {
    // Clear Okta session and tokens
    await oktaAuth.signOut();
    dispatch(
      updatecart({
        items: [],
        totalQty: 0,
        totalPrice: 0,
      })
    );
    dispatch(updateWhishlist([]));
  };

  const login = async () => {
    void oktaAuth.signInWithRedirect();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
