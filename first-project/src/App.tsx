import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import TodosPage from "./pages/TodosPage";
import ProductsPage from "./pages/ProductsPage";
import GithubPage from "./pages/GithubPage";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={user ? <Navigate to="/home" /> : <Login />}
      />

      {/* Dashboard */}
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/" />}
      />

      {/* Feature Pages */}
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
