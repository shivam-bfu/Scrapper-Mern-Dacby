import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({
  children,
}) => {
  const { token } = useAuth();

  // Not Logged In
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Logged In
  return children;
};

export default ProtectedRoute;