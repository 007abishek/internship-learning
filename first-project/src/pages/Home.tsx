import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";
import FeatureCard from "../components/FeatureCard";
import "../styles/dashboard.css";

const Home = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  if (!user) return null;

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="topbar-left">
            <h1>Dashboard</h1>
            <p>
              Manage your todos, products, and GitHub repositories in one place
            </p>
          </div>

          <div className="topbar-right">
            <button className="icon-btn" onClick={toggleTheme}>
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>

        {user.isAnonymous && (
          <p className="guest-warning">
            You are in Guest mode. Login to unlock full features.
          </p>
        )}

        <div className="dashboard-grid">
          <FeatureCard
            title="Todo Manager"
            description="Create, edit, and manage your tasks"
            route="/home/todos"
            icon="📝"
            accent="blue"
          />
          <FeatureCard
            title="Product Manager"
            description="Manage and organize your products"
            route="/home/products"
            icon="📦"
            accent="purple"
          />
          <FeatureCard
            title="GitHub Repos"
            description="View and track your GitHub repositories"
            route="/home/github"
            icon="🐙"
            accent="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
