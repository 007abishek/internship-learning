import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function AvatarMenu() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-bold"
    >
      U
    </button>
  );
}
