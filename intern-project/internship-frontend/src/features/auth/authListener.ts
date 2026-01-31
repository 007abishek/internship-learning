import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { loginSuccess, logout } from "./authSlice";
import type { AppDispatch } from "../../app/store";

export const startAuthListener = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        loginSuccess({
          uid: user.uid,
          email: user.email,
          provider: user.providerData[0]?.providerId ?? "guest",
        })
      );
    } else {
      dispatch(logout());
    }
  });
};
