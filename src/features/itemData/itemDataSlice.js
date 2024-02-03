import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//비동기 액션 생성
export const fetchData = createAsyncThunk(
  "itemData/fetchData",
  async function (state) {
    try {
      const response = await fetch(
        // "https://family-album-three.vercel.app/api/data",
        "/api/data",
        {
          method: "GET", // HTTP 메소드 지정
          headers: {
            // 헤더에 Authorization 추가
            Authorization: "fiKyi3A8FTuyq65cdObDsodi",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      return data; // 액션의 데이터 반환(액션의 payload)
    } catch (error) {
      console.log("요청 중 에러가 발생했습니다.", error);
    }
  }
);

export const itemDataSlice = createSlice({
  name: "itemData",
  initialState: {
    itemData: [],
    status: "idle",
    error: null,
  },
  reducers: {
    //삭제
    delData: (state, action) => {
      // const index = state.itemData.findIndex(
      //   item => item.id === action.payload
      // );
      // state.itemData.splice(index, 1);
      state.itemData = state.itemData.filter(
        item => item.id !== action.payload
      );
    },
    //추가
    addDataState: (state, action) => {
      state.itemData = [action.payload, ...state.itemData];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { delData, addDataState } = itemDataSlice.actions;

export default itemDataSlice.reducer;
