import { apiSlice } from "../api/apiSlice";


const bannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: (query) => ({
        url: `/banner?sort=position&${query}`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
    addBanner: builder.mutation({
      query: (banner) => ({
        url: "/banner/create",
        method: "POST",
        body: banner,
      }),
      invalidatesTags: ["banner"],
    }),
    updateBanner: builder.mutation({
      query: ({body,id}) => ({
        url:`banner/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["banner"],
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `banner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
    useAddBannerMutation,
    useDeleteBannerMutation,
    useGetBannerQuery,
    useUpdateBannerMutation
} = bannerApi;
