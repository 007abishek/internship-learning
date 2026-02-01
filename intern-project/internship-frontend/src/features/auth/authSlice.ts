import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  uid: string;
  email: string | null;
  provider: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean; // 🔑 IMPORTANT
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true, // 🔑 app is checking auth on startup
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false; // ✅ auth resolved
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false; // ✅ auth resolved
    },
    authResolved: (state) => {
      // 🔑 for cases where user is null but auth finished
      state.loading = false;
    },
  },
});

export const { loginSuccess, logout, authResolved } =
  authSlice.actions;

export default authSlice.reducer;
