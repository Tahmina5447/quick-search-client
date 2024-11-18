import { apiSlice } from "@/redux/api/apiSlice";
import { setToken, setUser } from "./authSlice";


const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // used for login
    signin: builder.mutation({
      query: (signinData) => ({
        url: `/user/login`,
        method: "POST",
        body: signinData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.status === "success") {
            localStorage.setItem("token", JSON.stringify(data?.data?.token));
            localStorage.setItem("user", JSON.stringify(data?.data?.user));
          }

          dispatch(setToken(data?.data?.token));
          dispatch(setUser(data?.data?.user));
        } catch (err) {
          console.log("error", err);
        }
      },
    }),

    // get user after login or when nead user data
    getUserData: builder.query({
      query: () => ({
        url: "user/my-profile",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const user = data.data?.user;
        const token = localStorage.getItem("token");
        dispatch(setUser(user));
        dispatch(setToken(token));
      },
    }),

    signup: builder.mutation({
      query: (signupData) => ({
        url: `/user/signup`,
        method: "POST",
        body: signupData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // `onSuccess` side-effect
          // localStorage.setItem("token", JSON.stringify(data));
          dispatch(setToken(data?.data?.token));
          dispatch(setUser(data?.data?.user));
        } catch (err) {
          // `onError` side-effect
          console.log("error", err);
        }
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation,useGetUserDataQuery } = authApi;
export const useGetUserData = () => useGetUserDataQuery().refetch;
