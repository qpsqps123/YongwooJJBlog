import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  query: null,
  pageNum: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    toNextPage(state) {
      state.pageNum = state.pageNum + 1;
    },
    toPrevPage(state) {
      state.pageNum = state.pageNum - 1;
    },
    setQuery(state, action) {
      console.log(action);
      state.query = action.payload;
    },
  },
});

export default searchSlice;
