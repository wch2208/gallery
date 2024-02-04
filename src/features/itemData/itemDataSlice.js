import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//비동기 액션 생성
export const fetchData = createAsyncThunk(
  "itemData/fetchData",
  async function ({ page, limit }, { getState }) {
    try {
      const response = await fetch(`/api/data?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("패치함수에서 data::", data);
      return data;
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
    hasMore: true,
    page: 1,
  },
  reducers: {
    //삭제
    delDataState: (state, action) => {
      state.itemData = state.itemData.filter(
        item => item.id !== action.payload
      );
    },
    //추가
    addDataState: (state, action) => {
      state.itemData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        //무한스크롤 데이터 추가로딩을 위한 로직
        state.itemData = [...state.itemData, ...action.payload];
        //중단 지점 설정
        if (
          action.payload.length === 0 ||
          action.payload.length < state.limit
        ) {
          state.hasMore = false;
        }
        //페이지 변수를 올려야한다.
        state.page += 1;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { delDataState, addDataState } = itemDataSlice.actions;

export default itemDataSlice.reducer;
