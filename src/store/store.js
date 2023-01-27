import { configureStore } from "@reduxjs/toolkit";
import { apiCore } from "./services/apiCore";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";
import { searchSlice } from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    [apiCore.reducerPath]: apiCore.reducer,
    users: userSlice.reducer,
    cart: cartSlice.reducer,
    search: searchSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCore.middleware),
});
