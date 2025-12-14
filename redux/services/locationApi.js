// import { api } from "./api"; // your base RTK Query api

// export const locationApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getLocations: builder.query({
//       query: (search = "") => {
//         return search ? `/location/list?search=${search}` : `/location/list`;
//       },
//       providesTags: ["Location"],
//     }),
//   }),
// });

// export const { useGetLocationsQuery } = locationApi;


import { api } from "./api";

export const areaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLocation: builder.query({
      query: () => `/area/location-list`, // will call `${baseUrl}/area`
      providesTags: ["Location"],
    }),
  }),
});

export const { useGetLocationQuery } = areaApi;
