import { api } from "./api";

export const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
      providesTags: ["Course"],
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
