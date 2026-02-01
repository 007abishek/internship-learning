import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  loginSuccess,
  logout,
  authResolved,
} from "./authSlice";

export const startAuthListener = (dispatch: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        loginSuccess({
          uid: user.uid,
          email: user.email,
          provider: user.providerData[0]?.providerId ?? "unknown",
        })
      );
    } else {
      dispatch(logout());
    }

    // 🔑 VERY IMPORTANT
    dispatch(authResolved());
  });
};
