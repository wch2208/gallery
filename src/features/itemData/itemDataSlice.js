import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//비동기 액션 생성
export const fetchData = createAsyncThunk(
  "itemData/fetchData",
  async function ({ page }, { getState }) {
    try {
      console.log("패치함수의 page", page);
      const response = await fetch(`/api/data?page=${page}&limit=5`, {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();

      console.log("패치함수의 data", data);
      return data.items;
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
        state.itemData = [...state.itemData, ...action.payload];
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
