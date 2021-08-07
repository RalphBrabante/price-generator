import { configureStore } from "@reduxjs/toolkit";
import pscascReducer from "../features/pcasc-slice";

export const store = configureStore({
  reducer: {
    pscascReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
