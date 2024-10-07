import { createContext, useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
    // Navigate to home page after logout
    // navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
