import { configureStore } from "@reduxjs/toolkit";
import createMediaSlice from "@redux/createMediaSlice";

export const store = configureStore({
  reducer: {
    createMedia: createMediaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
