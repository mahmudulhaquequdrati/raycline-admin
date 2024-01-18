import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const googleSetDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    googleLoginData: builder.mutation({
      query: (body) => ({
        url: "/handleGoogleDataCreate",
        method: "POST",
        body,
      }),
      // if i want to get the callback response here then
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "authNutraNextUser",
            JSON.stringify({
              accessToken: result.data.data.accessToken,
              user: result.data.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.accessToken,
              user: result.data.data.user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useGoogleLoginDataMutation } = googleSetDataApi;
