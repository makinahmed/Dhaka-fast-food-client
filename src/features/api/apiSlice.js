import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (data) => ({
        url: "addproduct",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

const {usePostProductMutation} = productApi;
