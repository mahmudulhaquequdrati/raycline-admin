import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import { vetListApi } from "../features/vetLists/vetLists";
import appointmentSlice from "../features/appointment/appointmentSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    vetLists: vetListApi,
    appointment: appointmentSlice,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware);
  },
});
