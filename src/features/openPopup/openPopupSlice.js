import { createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: "openPopup",
  initialState: { state: false, url: "", id: "" },
  reducers: {
    togglePopup: (state, action) => {
      const { newState, newUrl, id } = action.payload;
      return { state: newState, url: newUrl, id };
    },
  },
});

export const { togglePopup } = openPopupSlice.actions;

export default openPopupSlice.reducer;
