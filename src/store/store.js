import { configureStore } from "@reduxjs/toolkit";
import openPopupReducer from "../features/openPopup/openPopupSlice";

//전역 상태를 저장할 스토어

export const store = configureStore({
  reducer: {
    //여기에 리듀서 추가하기
    openPopup: openPopupReducer,
  },
});
