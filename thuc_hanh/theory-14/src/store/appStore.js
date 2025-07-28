import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "@/features/articles/articleApiSlice";

export const appStore = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
