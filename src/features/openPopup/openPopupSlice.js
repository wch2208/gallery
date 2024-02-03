import { createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: "openPopup",
  initialState: { state: false, url: "", id: "", title: "" },
  reducers: {
    togglePopup: (state, action) => {
      const { newState, newUrl, id, title } = action.payload;
      return { state: newState, url: newUrl, id: id, title: title };
    },
  },
});

export const { togglePopup } = openPopupSlice.actions;

export default openPopupSlice.reducer;
