import { useNavigate, useLocation } from "react-router-dom";
import type React from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (): void => {
    // Use sessionStorage so auth ends with the tab; also clear any legacy localStorage token
    sessionStorage.setItem("token", "abc123");
    localStorage.removeItem("token");

    // Redirect to the page user was trying to access, or dashboard as default
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";
    navigate(from, { replace: true });
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
