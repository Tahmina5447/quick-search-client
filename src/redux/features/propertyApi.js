
import { apiSlice } from "../api/apiSlice";

const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "category",
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
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["property"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddPropertyMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = propertyApi;
