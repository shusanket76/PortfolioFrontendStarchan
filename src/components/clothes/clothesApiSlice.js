import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const clothesAdapter = createEntityAdapter({});

const initialState = clothesAdapter.getInitialState();

export const extendedClothesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClothesData: builder.query({
      query: () => "/clothes",
      transformResponse: (resData) => {
        const loadedPosts = resData.map((post) => {
          post.id = post._id;
          return post;
        });
        return clothesAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: ["Clothes"],
    }),
  }),
});

export const { useGetClothesDataQuery } = extendedClothesApiSlice;
export const selectClothesEndpoint =
  extendedClothesApiSlice.endpoints.getClothesData.select();

const selectClothesData = createSelector(
  selectClothesEndpoint,
  (clothesData) => clothesData.data
);

export const {
  selectAll: selectAllClothesData,
  selectById: selectClothesById,
} = clothesAdapter.getSelectors(
  (state) => selectClothesData(state) ?? initialState
);
