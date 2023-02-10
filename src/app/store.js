import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  blogApi,
  cuponApi,
  productApi,
  soldApi,
} from "../features/api/apiSlice";
import cartSlice from "../features/api/cartSlice";
import filterSlice from "../features/api/filterSlice";
import { userApi } from "../features/api/userSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    filter: filterSlice,
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cuponApi.reducerPath]: userApi.reducer,
    [soldApi.reducerPath]: soldApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productApi.middleware,
      blogApi.middleware,
      cuponApi.middleware,
      userApi.middleware
    ),
});

export default store;
