import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authState } = useOktaAuth();

  if (authState.isAuthenticated) return children;
  return <Navigate to="/signin_redirect" />;
};

export default PrivateRoute;
