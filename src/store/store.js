import { configureStore } from "@reduxjs/toolkit";
import { apiCore } from "./services/apiCore";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [apiCore.reducerPath]: apiCore.reducer,
    users: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCore.middleware),
});
