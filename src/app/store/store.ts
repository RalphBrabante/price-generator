import { configureStore } from "@reduxjs/toolkit";
import pscascReducer from "../features/pcasc-slice";
import { apiSlice as dogApi } from "../features/dog-api-slice";

export const store = configureStore({
  reducer: {
    pscascReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
