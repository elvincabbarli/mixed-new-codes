import { configureStore } from "@reduxjs/toolkit";
import reserVationReducer from "../features/reserVationSlice";
import customerReducer from "../features/costumerSlice";

export const store = configureStore({
  reducer: {
    reservations: reserVationReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
