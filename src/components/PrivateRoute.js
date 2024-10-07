import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return children;
  return <Navigate to="/signin_redirect" />;
};

export default PrivateRoute;
