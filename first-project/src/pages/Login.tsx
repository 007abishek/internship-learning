import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { FirebaseError } from "firebase/app";

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
        setMessage(
          "Invalid email or password. If you are new, please sign up."
        );
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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

  const handleGithubLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      await githubLogin();
    } catch (err) {
      const error = err as FirebaseError;

      if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        setMessage(
          "This email is already registered using another login method."
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
    <div>
      <h2>Authentication</h2>

      <button onClick={handleGoogleLogin} disabled={loading}>
        Continue with Google
      </button>

      <hr />

      <button onClick={handleGithubLogin} disabled={loading}>
        Continue with GitHub
      </button>

      <hr />

      <button onClick={handleGuestLogin} disabled={loading}>
        Continue as Guest
      </button>

      <hr />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>

      <button onClick={handleSignUp} disabled={loading}>
        Sign Up
      </button>

      {message && <p style={{ color: "red" }}>{message}</p>}
      {loading && <p>Processing...</p>}
    </div>
  );
};

export default Login;