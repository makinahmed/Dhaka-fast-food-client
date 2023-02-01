import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productApi.middleware
    ),
});

export default store;
