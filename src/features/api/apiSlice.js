/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_LINK,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    if (endpoint.name !== "login" || endpoint.name !== "register") {
      // if (endpoint.name === "someEndpoint") {}
      // Add an authorization header to every endpoint.
      const { accessToken } = getState().auth;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      // dispatch logout action
      api.dispatch(userLoggedOut());
      localStorage.removeItem("authNutraNextUser");
    }
    return result;
  },
  tagTypes: ["Availabilities", "Appointment", "getUserData"],
  endpoints: (builder) => ({}),
});

export const { useGetReposQuery } = apiSlice;
