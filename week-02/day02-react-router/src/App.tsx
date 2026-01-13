import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    // Clear any session token as well, to keep behavior consistent
    sessionStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔐 Protected Routes Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Dynamic user route */}
        <Route path="/users/:id" element={<User />} />
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
