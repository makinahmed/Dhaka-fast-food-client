import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { blogApi, productApi } from "../features/api/apiSlice";
import cartSlice from "../features/api/cartSlice";
import { userApi } from "../features/api/userSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productApi.middleware,
      blogApi.middleware,
      userApi.middleware
    ),
});

export default store;
