import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import TodosPage from "./pages/TodosPage";
import ProductsPage from "./pages/ProductsPage";
import GithubPage from "./pages/GithubPage";

const App = () => {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/home" /> : <Login />}
      />

      <Route
        path="/home"
        element={
          user ? (
            <div>
              <h2>Dashboard</h2>

              <p>Logged in as: {user.email ?? "Guest User"}</p>
              <p>
                Provider:{" "}
                {user.isAnonymous
                  ? "Guest"
                  : user.providerData?.[0]?.providerId ?? "Unknown"}
              </p>

              <button onClick={logout}>Logout</button>

              <Home />
            </div>
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/home/todos"
        element={user ? <TodosPage /> : <Navigate to="/" />}
      />

      <Route
        path="/home/products"
        element={user ? <ProductsPage /> : <Navigate to="/" />}
      />

      <Route
        path="/home/github"
        element={user ? <GithubPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
