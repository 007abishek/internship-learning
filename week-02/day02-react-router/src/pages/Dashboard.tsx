import { useNavigate } from "react-router-dom";
import type React from "react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const logout = (): void => {
    // Clear both storages to ensure logout regardless of storage choice
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <h2>Dashboard (Protected)</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Dashboard;
