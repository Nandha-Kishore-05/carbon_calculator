import { createSlice } from "@reduxjs/toolkit";
export const karma = createSlice({
  name: "data",
  initialState: {
    value: {

    },
  },
  reducers: {
    setdata: (state, action) => {
      console.log(action.payload.data);
      state.value = action.payload.data;

      console.log("at",state.value)
    }
  },
});

export const {
  setdata
} = karma.actions;

export default karma.reducer;
