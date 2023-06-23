import { configureStore } from "@reduxjs/toolkit";
import {
  blogApi,
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
    [soldApi.reducerPath]: soldApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [productApi.middleware,
      blogApi.middleware,
      userApi.middleware,
      soldApi.middleware]
    ),
});

export default store;
