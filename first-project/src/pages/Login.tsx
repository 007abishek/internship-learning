import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { FirebaseError } from "firebase/app";
import "../styles/login.css";

const Login = () => {
  const {
    signIn,
    signUp,
    googleLogin,
    githubLogin,
    guestLogin,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setMessage("");
  }, []);

  // --------------------
  // Email / Password Sign In
  // --------------------
  const handleSignIn = async () => {
    setMessage("");
    setLoading(true);

    try {
      await signIn(email, password);
    } catch (err) {
      const error = err as FirebaseError;

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setMessage("Invalid email or password.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // Email / Password Sign Up
  // --------------------
  const handleSignUp = async () => {
    setMessage("");
    setLoading(true);

    try {
      await signUp(email, password);
    } catch (err) {
      const error = err as FirebaseError;

      if (error.code === "auth/email-already-in-use") {
        setMessage("Account already exists. Please sign in.");
      } else if (error.code === "auth/weak-password") {
        setMessage("Password must be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Unable to create account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // Google Login
  // --------------------
  const handleGoogleLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      await googleLogin();
    } catch {
      setMessage("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // GitHub Login (v0-style UX)
  // --------------------
  const handleGithubLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      await githubLogin();
    } catch (err) {
      const error = err as FirebaseError;

      if (error.code === "auth/account-exists-with-different-credential") {
        setMessage(
          "This email is already associated with another sign-in method. Please try Google."
        );
      } else if (error.code === "auth/popup-closed-by-user") {
        setMessage("Login popup was closed.");
      } else {
        setMessage("GitHub login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // Guest Login
  // --------------------
  const handleGuestLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      await guestLogin();
    } catch {
      setMessage("Guest login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Authentication</h2>

        <button
          className="login-btn google"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          Continue with Google
        </button>

        <button
          className="login-btn github"
          onClick={handleGithubLogin}
          disabled={loading}
        >
          Continue with GitHub
        </button>

        <button
          className="login-btn guest"
          onClick={handleGuestLogin}
          disabled={loading}
        >
          Continue as Guest
        </button>

        <div className="divider">OR</div>

       
        <form
  onSubmit={(e) => {
    e.preventDefault();
    handleSignIn();
  }}
>
  <input
    className="login-input"
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    disabled={loading}
  />

  <input
    className="login-input"
    type="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    disabled={loading}
  />

  <button
    className="login-btn signin"
    type="submit"
    disabled={loading}
  >
    Sign In
  </button>
</form>

      

        <button
          className="login-btn secondary"
          onClick={handleSignUp}
          disabled={loading}
        >
          Sign Up
        </button>

        {message && <p className="login-error">{message}</p>}
        {loading && <p className="login-loading">Processing...</p>}
      </div>
    </div>
  );
};

export default Login;
