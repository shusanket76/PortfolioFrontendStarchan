import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const natureAdapter = createEntityAdapter({});
const initialState = natureAdapter.getInitialState();

export const extendedNatureApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNatureData: builder.query({
      query: () => "/nature",
      transformResponse: (resData) => {
        const loadedPosts = resData.map((post) => {
          post.id = post._id;
          return post;
        });
        return natureAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: ["Nature"],
    }),
  }),
});

export const { useGetNatureDataQuery } = extendedNatureApiSlice;

export const selectNatureEndpoint =
  extendedNatureApiSlice.endpoints.getNatureData.select();

const selectNatureData = createSelector(
  selectNatureEndpoint,
  (natureData) => natureData.data
);

export const {
  selectAll: selectAllNatureData,
  selectById: selectNaturePostById,
} = natureAdapter.getSelectors(
  (state) => selectNatureData(state) ?? initialState
);
