import { useNavigate } from "react-router-dom";
import type React from "react";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    // Mark user as logged in in App state
    setIsLoggedIn(true);
    // Optionally still store a token if you want to inspect it
    sessionStorage.setItem("token", "abc123");

    // Go to dashboard after login
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
