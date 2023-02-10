import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
      }),
      providesTags: ["Products"],
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "addproduct",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    postBlog: builder.mutation({
      query: (data) => ({
        url: "addblog",
        body: data,
        method: "POST",
      }),
      providesTags: ["Cupons"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "blog",
      }),
    }),
  }),
});

export const soldApi = createApi({
  reducerPath: "soldApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    postSoldProduct: builder.mutation({
      query: (data) => ({
        url: "sold",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const cuponApi = createApi({
  reducerPath: "cuponApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  
  endpoints: (builder) => ({
    checkCupon: builder.query({
      query: (data) => ({
        url: "checkcupon",
        body:data,
      }),
    }),
    postCupon: builder.mutation({
      query: (body) => ({
        url: "cupon",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const { usePostProductMutation, useGetProductsQuery } = productApi;
export const { usePostBlogMutation, useGetBlogQuery } = blogApi;
export const { usePostSoldProductMutation } = soldApi;
export const {
  usePostCuponMutation,
  useDeleteCuponMutation,
  useCheckCuponQuery
} = cuponApi;
