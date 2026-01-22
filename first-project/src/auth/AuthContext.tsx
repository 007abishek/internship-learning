import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../firebase/config";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (e: string, p: string) => Promise<UserCredential>;
  signUp: (e: string, p: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  githubLogin: () => Promise<UserCredential>;
  guestLogin: () => Promise<UserCredential>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn: (e, p) => signInWithEmailAndPassword(auth, e, p),
        signUp: (e, p) => createUserWithEmailAndPassword(auth, e, p),
        googleLogin: () =>
          signInWithPopup(auth, new GoogleAuthProvider()),
        githubLogin: () =>
          signInWithPopup(auth, new GithubAuthProvider()),
        guestLogin: () => signInAnonymously(auth),
        logout: () => signOut(auth),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth outside provider");
  return ctx;
};
