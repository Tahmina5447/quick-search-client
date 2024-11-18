import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "omit",
    prepareHeaders: (headers) => {
      const tokenString = localStorage.getItem("token");
      if (tokenString) {
        try {
          const token = JSON.parse(tokenString);
          headers.set("authorization", `${token}`);
        } catch (error) {
          console.error("Failed to parse token", error);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["users","property","banner"],
  endpoints: (builder) => ({}),
});
