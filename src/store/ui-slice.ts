import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  showSearch: false,
  showSideMenu: false,
  showThemeMenu: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleSearchVisibility(state) {
      state.showSearch = !state.showSearch;
    },
    toggleSideMenuVisibility(state) {
      state.showSideMenu = !state.showSideMenu;
    },
    toggleThemeMenuVisibility(state) {
      state.showThemeMenu = !state.showThemeMenu;
    },
  },
});

export default uiSlice;
