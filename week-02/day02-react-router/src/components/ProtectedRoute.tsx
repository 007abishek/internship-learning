import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import type React from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

// Treat empty, null, "null", and "undefined" as unauthenticated
const isValidToken = (token: string | null) =>
  !!(token && token !== "null" && token !== "undefined");

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  // Prefer sessionStorage so auth dies with the tab; clean up any legacy localStorage token
  const sessionToken = sessionStorage.getItem("token");
  if (!sessionToken) {
    localStorage.removeItem("token");
  }

  const token = sessionToken;
  const isAuth = isValidToken(token);

  if (!isAuth) {
    // Save the attempted location to redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
