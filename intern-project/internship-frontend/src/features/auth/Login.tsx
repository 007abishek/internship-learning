import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  githubProvider,
} from "../../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { loginSuccess } from "./authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSuccess = (user: any, provider: string) => {
    dispatch(
      loginSuccess({
        uid: user.uid,
        email: user.email,
        provider,
      })
    );
    navigate("/");
  };

  const loginEmail = async () => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    handleSuccess(res.user, "email");
  };

  const loginGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    handleSuccess(res.user, "google");
  };

  const loginGithub = async () => {
    const res = await signInWithPopup(auth, githubProvider);
    handleSuccess(res.user, "github");
  };

  const loginGuest = async () => {
    const res = await signInAnonymously(auth);
    handleSuccess(res.user, "guest");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <input
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border rounded px-3 py-2 mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginEmail}
          className="w-full bg-blue-600 text-white py-2 rounded mb-3"
        >
          Login with Email
        </button>

        <div className="flex gap-3 mb-3">
          <button onClick={loginGoogle} className="flex-1 border py-2 rounded">
            Google
          </button>
          <button onClick={loginGithub} className="flex-1 border py-2 rounded">
            GitHub
          </button>
        </div>

        <button
          onClick={loginGuest}
          className="w-full text-sm text-gray-600 underline mb-4"
        >
          Continue as Guest
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
