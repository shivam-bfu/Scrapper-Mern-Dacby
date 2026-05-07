// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // TEMPORARY AUTH CHECK
  // Later replace with Context API
  const token = localStorage.getItem("token");

  // If no token -> redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated -> render page
  return children;
};

export default ProtectedRoute;