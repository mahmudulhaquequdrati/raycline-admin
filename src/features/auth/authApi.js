/* eslint-disable no-unused-vars */
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/admin/register",
        method: "POST",
        body,
      }),
      // if i want to get the callback response here then
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "authNutraNextAdmin",
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
    login: builder.mutation({
      query: (body) => ({
        url: "/admin/login",
        method: "POST",
        body,
      }),
      // if i want to get the callback response here then meaning after fetch if i want .then()
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "authNutraNextAdmin",
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
    updateMedicalForUser: builder.mutation({
      query: (data) => ({
        url: `/user/updateMedical/${data?.userId}`,
        method: "PUT",
        body: {
          completed_medical_report: data?.completed_medical_report,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(result);
          const data = JSON.parse(localStorage.getItem("authNutraNextUser"));
          const token = data?.accessToken;
          const user = result?.data;
          localStorage.setItem(
            "authNutraNextUser",
            JSON.stringify({
              accessToken: token,
              user: user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUpdateMedicalForUserMutation,
} = authApi;
