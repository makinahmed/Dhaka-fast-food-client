import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "addproduct",
        body: data,
        method: "POST",
      }),
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
    }),
    getBlog: builder.query({
      query: () => ({
        url: "blog",
      }),
    }),
  }),
});

export const cuponApi = createApi({
  reducerPath: "cuponApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    postCupon: builder.mutation({
      query: (body) => ({
        url: "cupon",
        body,
        method: "POST",
      }),
    }),
    getCupon: builder.query({
      query: () => ({
        url: "cupon",
        method: 'POST'
      }),
    }),
    deleteCupon: builder.mutation({
      query: () => ({
        url: "cupon",
        method: "DELETE",
      }),
    }),
  }),
});
 
export const { usePostProductMutation, useGetProductsQuery } = productApi;
export const { usePostBlogMutation, useGetBlogQuery } = blogApi;
export const { usePostCuponMutation,useDeleteCuponMutation,useGetCuponQuery } = cuponApi;
