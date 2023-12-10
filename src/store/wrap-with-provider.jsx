import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import RefProvider from "../context/refContext";

const wrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <RefProvider>{element}</RefProvider>
    </Provider>
  );
};

export default wrapWithProvider;
