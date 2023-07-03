import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const modelingAdapter = createEntityAdapter({});
const initialState = modelingAdapter.getInitialState();

export const extendedModelingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModelingsData: builder.query({
      query: () => "/modeling",

      transformResponse: (resData) => {
        const loadedPosts = resData.map((post) => {
          post.id = post._id;
          return post;
        });
        return modelingAdapter.setAll(initialState, loadedPosts);
      },

      providesTags: ["Modeling"],
    }),
  }),
});

export const { useGetModelingsDataQuery } = extendedModelingApiSlice;

export const selectModelingsEndpoint =
  extendedModelingApiSlice.endpoints.getModelingsData.select();

const selectModelingData = createSelector(
  selectModelingsEndpoint,
  (modelingData) => modelingData.data
);

export const {
  selectAll: selectAllModelingData,
  selectById: selectModelingDataById,
} = modelingAdapter.getSelectors(
  (state) => selectModelingData(state) ?? initialState
);
