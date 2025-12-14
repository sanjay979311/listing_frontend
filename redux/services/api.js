

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({}),
});

export const { useLoginMutation } = api;



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getCookie } from "cookies-next";

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, 
//     prepareHeaders: (headers) => {
//       const token = getCookie("token"); // auto-read token
//       if (token) headers.set("Authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   tagTypes: ["Auth", "Category"],
//   endpoints: () => ({}),
// });



