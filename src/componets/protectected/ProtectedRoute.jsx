import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/Authprivider";

const ProtectedRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const login = context.login;

  if (!login) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
