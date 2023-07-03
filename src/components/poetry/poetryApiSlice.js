import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const poetryAdapter = createEntityAdapter({});
const initialState = poetryAdapter.getInitialState();

export const extendedPoetryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPoetryData: builder.query({
      query: () => "/poetry",
      transformResponse: (resData) => {
        const loadedPosts = resData.map((post) => {
          post.id = post._id;
          return post;
        });
        return poetryAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: ["Poetry"],
    }),
  }),
});

export const { useGetPoetryDataQuery } = extendedPoetryApiSlice;

export const selectPoetryEndpoint =
  extendedPoetryApiSlice.endpoints.getPoetryData.select();

const selectPoetryData = createSelector(
  selectPoetryEndpoint,
  (poetryData) => poetryData.data
);

export const { selectAll: selectAllPoetryData, selectById: selectPoetryById } =
  poetryAdapter.getSelectors(
    (state) => selectPoetryData(state) ?? initialState
  );
