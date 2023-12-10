import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  themeChange: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    detectThemeChange(state) {
      state.themeChange = !state.themeChange;
    },
  },
});

export default uiSlice;
