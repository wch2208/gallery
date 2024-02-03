import { head, list } from "@vercel/blob";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const runtime = "edge";

//비동기 액션 생성
export const fetchBlobDetails = createAsyncThunk(
  "itemData/fetchBlobDetails",
  async function () {
    const { blobList } = await list(process.env.BLOB_READ_WRITE_TOKEN);
    console.log("데이터 패치 실행");
    return blobList;
  }
);

export const itemDataSlice = createSlice({
  name: "itemData",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    //
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBlobDetails.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchBlobDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        // action.payload에는 fetchBlobDetails의 반환 값이 들어있습니다.
        state.data = action.payload;
        console.log("블룹데이터:", state.data);
      })
      .addCase(fetchBlobDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = itemDataSlice.actions;

export default itemDataSlice.reducer;
