import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  themeChange: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
  },
});

export default uiSlice;
