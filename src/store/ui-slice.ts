import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  showSearch: false,
  showSideMenu: false,
  showThemeMenu: false,
  executed: false,
  isThemeChanged: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleSearchVisibility(state) {
      state.showSearch = !state.showSearch;
    },
    hideSearch(state) {
      state.showSearch = false;
    },
    toggleSideMenuVisibility(state) {
      state.showSideMenu = !state.showSideMenu;
    },
    hideSideMenu(state) {
      state.showSideMenu = false;
    },
    toggleThemeMenuVisibility(state) {
      state.showThemeMenu = !state.showThemeMenu;
    },
    hideThemeMenu(state) {
      state.showThemeMenu = false;
    },
    executeOnce(state) {
      state.executed = true;
    },
    clearExecuted(state) {
      state.executed = false;
    },
    detectThemeChange(state) {
      state.isThemeChanged = !state.isThemeChanged;
    },
  },
});

export default uiSlice;
