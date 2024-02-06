import { createSlice } from "@reduxjs/toolkit";

export const openPopupSlice = createSlice({
  name: "openPopup",
  initialState: { state: false, url: "", id: "", title: "", docId: "" },
  reducers: {
    togglePopup: (state, action) => {
      const { newState, newUrl, id, title, docId } = action.payload;
      return {
        state: newState,
        url: newUrl,
        id: id,
        title: title,
        docId: docId,
      };
    },
  },
});

export const { togglePopup } = openPopupSlice.actions;

export default openPopupSlice.reducer;
