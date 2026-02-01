import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todos/todoSlice";
import cartReducer from "../features/products/cartSlice";

import { productApi } from "../features/products/productApi";
import { githubApi } from "../features/github/githubApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    cart: cartReducer,

    [productApi.reducerPath]: productApi.reducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      githubApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
console.log("STORE INIT STATE:", store.getState());
