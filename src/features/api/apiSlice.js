import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
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
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
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
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: () => ({
        url: "sold",
      }),
      invalidatesTags: ["Product"],
    }),
    postSoldProduct: builder.mutation({
      query: (data) => ({
        url: "sold",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    acceptSoldProduct: builder.mutation({
      query: (data) => ({
        url: "sold",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});


// export const myOrderApi = createApi({
//   reducerPath: "myOrderApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:8000/",
//   }),

//   endpoints: (builder) => ({
//     getMyOrders: builder.query({
//       query: () => ({
//         url: "myorders",
//       }),

//     }),

//   }),
// });



// export const orderSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/",
//   }),
//   endpoints: (builder) => ({
//     orderApi: builder.mutation({
//       query: (data) => ({
//         url: "allorders",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

export const { usePostProductMutation, useGetProductsQuery } = productApi;
export const { usePostBlogMutation, useGetBlogQuery } = blogApi;
export const { usePostSoldProductMutation,useGetMyOrdersQuery ,useAcceptSoldProductMutation} = soldApi;


