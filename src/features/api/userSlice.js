import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export  const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dhaka-fast-food-backend.vercel.app/",
  }),
  endpoints: (builder) => ({
    userApi: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {  useUserApiMutation } = userApi;