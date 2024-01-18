import { apiSlice } from "../api/apiSlice";

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query({
      query: ({ email }) => ({
        url: `/appointment-lists/${email}`,
      }),

      providesTags: ["Appointment"],
    }),
    getAppointmentDetails: builder.query({
      query: (id) => ({
        url: `/appointment/${id}`,
      }),
    }),
    getVetAppointmentDetails: builder.query({
      query: (id) => ({
        url: `/specificVetUserData/${id}`,
      }),
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "/create-appointment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointment"],
    }),
    editAppointment: builder.mutation({
      query: ({ data, id }) => {
        // console.log(data, id);
        return {
          url: `/edit-appointment/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      providesTags: ["Appointment"],
    }),
    deleteAppointment: builder.mutation({
      query: ({ id }) => {
        // console.log(id);
        return {
          url: `/appointment/delete/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAppointmentDetailsQuery,
  useCreateAppointmentMutation,
  useGetAllAppointmentsQuery,
  useEditAppointmentMutation,
  useDeleteAppointmentMutation,
  useGetVetAppointmentDetailsQuery,
} = appointmentApi;
