import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCore = createApi({
  reducerPath: "apiCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8082/api",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products/all" }),
    getProductsByCategory: builder.query({
      query: (category) => `/${category}`,
    }),
    getServices: builder.query({ query: () => `` }),
    getServicesByCategory: builder.query({
      query: (category) => `/${category}`,
    }),
    getProductsBySearch: builder.query({
      query: (name) => `/products/name?name=${name}`,
    }),

    getProductDetails: builder.query({
      query: ({ productid }) => `/products/${productid}`,
    }),
    getServiceDetails: builder.query({
      query: ({ serviceid }) => `/${serviceid}`,
    }),
    getProductsRelated: builder.query({
      query: ({ productid }) => `/${productid}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetServicesQuery,
  useGetServicesByCategoryQuery,
  useGetProductsBySearchQuery,
  useGetProductDetailsQuery,
  useGetServiceDetailsQuery,
  useGetProductsRelatedQuery,
} = apiCore;
