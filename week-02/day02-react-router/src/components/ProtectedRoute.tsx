import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

const ProtectedRoute = ({
  isLoggedIn,
  children,
}: ProtectedRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
