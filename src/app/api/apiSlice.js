import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-470r.onrender.com",
  }),
  tagTypes: ["Modeling", "Nature", "Poetry", "ClothDesign", "Clothes"],
  endpoints: (builder) => ({}),
});
