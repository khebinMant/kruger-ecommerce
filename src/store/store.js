import { configureStore } from "@reduxjs/toolkit";
import { apiCore } from "./services/apiCore";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    [apiCore.reducerPath]: apiCore.reducer,
    users: userSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCore.middleware),
});
