// import { apiSlice } from "../api/apiSlice";

// const forgetPassApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     resendOtp: builder.mutation({
//       query: (email) => ({
//         url: `/auth/resend_otp`,
//         method: "POST",
//         body: email,
//       }),
//     }),
//     verifyOtp: builder.mutation({
//       query: (data) => ({
//         url: `/auth/verify`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     forgetPass: builder.mutation({
//       query: (data) => ({
//         url: `/auth/reset_password`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     updatePass: builder.mutation({
//       query: (data) => ({
//         url: `/auth/change-password`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useResendOtpMutation,
//   useVerifyOtpMutation,
//   useForgetPassMutation,
//   useUpdatePassMutation,
// } = forgetPassApi;
