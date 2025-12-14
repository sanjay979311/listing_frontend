// redux/services/categoryApi.js
import { api } from "./api"; // your base RTK Query api

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category/list`, // no search param
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
