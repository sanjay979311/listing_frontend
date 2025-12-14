



// import { api } from "./api";

// export const authApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     checkUser: builder.mutation({
//       query: (data) => ({
//         url: "/auth/check-user",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     verifyOtp: builder.mutation({
//       query: (data) => ({
//         url: "/auth/verify-otp",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: "/auth/register",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
//   overrideExisting: false,
// });

// export const {
//   useCheckUserMutation,
//   useLoginMutation,
//   useVerifyOtpMutation,
//   useRegisterMutation,
// } = authApi;



// redux/services/authApi.js


import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    profile: builder.query({
      query: () => "/profile",
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfileQuery,
} = authApi;

