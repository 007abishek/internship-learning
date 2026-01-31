import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import AvatarMenu from "../AvatarMenu";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-600">MyApp</h1>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/products">Products</Link>
        <Link to="/github">GitHub</Link>

        <ThemeToggle />
        <AvatarMenu />
      </div>
    </nav>
  );
}
