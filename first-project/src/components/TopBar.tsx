import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/topbar.css";

const TopBar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p className="subtitle">
          Manage your todos, products, and GitHub repositories in one place
        </p>
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopBar;
