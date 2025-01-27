
import { apiSlice } from "../api/apiSlice";

const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (query) => ({
        url: `property?${query}`,
        method: "GET",
      }),
      providesTags: ["property"],
    }),
    addProperty: builder.mutation({
      query: (property) => ({
        url: "/property/create",
        method: "POST",
        body: property,
      }),
      invalidatesTags: ["property"],
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: "category",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `property/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["property"],
    }),
  }),
});

export const {
  useGetPropertyQuery,
  useAddPropertyMutation,
  useUpdateCategoryMutation,
  useDeletePropertyMutation,
} = propertyApi;
