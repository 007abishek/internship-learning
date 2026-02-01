import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import AvatarMenu from "../AvatarMenu";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { user, loading } = useAppSelector((state) => state.auth);

  // 🛒 cart count
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  // ⏳ wait for auth to resolve
  if (loading) return null;

  // 🚫 hide navbar if not logged in
  if (!user) return null;

  // ✅ show cart only on product-related routes
  const showCart =
    location.pathname.startsWith("/products") ||
    location.pathname === "/cart";

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Left */}
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/github">GitHub</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* 🛒 Cart (only on product pages) */}
        {showCart && (
          <Link to="/cart" className="relative">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        )}

        <ThemeToggle />
        <AvatarMenu email={user.email} />

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
