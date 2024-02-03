import { createSlice } from "@reduxjs/toolkit";

export const addInputModalSlice = createSlice({
  name: "addInputModal",
  initialState: { state: false, img: "", video: "", id: "", title: "" },
  reducers: {
    addOpen: (state, action) => {
      const { newState, newImg, newVideo, id, title } = action.payload;

      return { state: newState, url: newImg, id: id, title: title };
    },
  },
});

export const { addOpen } = addInputModalSlice.actions;

export default addInputModalSlice.reducer;
