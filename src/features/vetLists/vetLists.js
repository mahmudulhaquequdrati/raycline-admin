import { apiSlice } from "../api/apiSlice";

export const vetListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllVetLists: builder.query({
      query: () => ({
        url: "/vetLists",
      }),
    }),
  }),
});

export const { useGetAllVetListsQuery } = vetListApi;
