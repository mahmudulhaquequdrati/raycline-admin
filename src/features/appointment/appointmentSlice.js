import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const appointmentSlice = createSlice({
  name: "appontiment",
  initialState,
  reducers: {
    sendDataToAppontment: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { sendDataToAppontment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
