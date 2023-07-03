import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const clothDesignNameAdapter = createEntityAdapter({});
const initialState = clothDesignNameAdapter.getInitialState();

export const extendedClothDesignNameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClothDesignData: builder.query({
      query: () => "/designame",
      transformResponse: (resData) => {
        const designame = resData.map((name) => {
          name.id = name._id;
          return name;
        });
        return clothDesignNameAdapter.setAll(initialState, designame);
      },
      providesTags: ["ClothDesign"],
    }),
  }),
});

export const { useGetClothDesignDataQuery } = extendedClothDesignNameApiSlice;

export const selectClothDesignEndpoint =
  extendedClothDesignNameApiSlice.endpoints.getClothDesignData.select();

const selectClothDesignData = createSelector(
  selectClothDesignEndpoint,
  (clothDesignResult) => clothDesignResult.data
);

export const {
  selectAll: selectAllClothDesignData,
  selectById: selectClothDesignById,
} = clothDesignNameAdapter.getSelectors(
  (state) => selectClothDesignData(state) ?? initialState
);
