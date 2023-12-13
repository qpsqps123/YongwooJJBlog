import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  query: "",
  pageNum: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    initPage(state) {
      state.pageNum = 1;
    },
    toNextPage(state) {
      state.pageNum = state.pageNum + 1;
    },
    toPrevPage(state) {
      state.pageNum = state.pageNum - 1;
    },
  },
});

export default searchSlice;
