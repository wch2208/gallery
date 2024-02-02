import { createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: "openPopup",
  initialState: { state: false, url: "" },
  reducers: {
    togglePopup: (state, action) => {
      const { newState, newUrl } = action.payload;
      console.log("토글리듀서", state);
      return { state: newState, url: newUrl };
    },
  },
});

export const { togglePopup } = openPopupSlice.actions;

export default openPopupSlice.reducer;
