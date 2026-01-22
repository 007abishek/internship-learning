import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Home = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <h3>Explore Features</h3>

      {user.isAnonymous && (
        <p style={{ color: "orange" }}>
          You are in Guest mode. Login to unlock full features.
        </p>
      )}

      <ul>
        <li>
          <Link to="/home/todos">📝 Todo App</Link>
        </li>
        <li>
          <Link to="/home/products">🛒 Products</Link>
        </li>
        <li>
          <Link to="/home/github">🐙 GitHub Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
