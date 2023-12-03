import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
