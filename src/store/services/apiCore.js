import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCore = createApi({
  reducerPath: "apiCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "" }),
    getProductsByCategory: builder.query({
      query: (category) => `/${category}`,
    }),
    getServices: builder.query({ query: () => "" }),
    getServicesByCategory: builder.query({
      query: (category) => `/${category}`,
    }),
    getProductsBySearch: builder.query({
      query: (searchTerm) => `/${searchTerm}`,
    }),

    getProductDetails: builder.query({
      query: ({ productid }) => `/${productid}`,
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
