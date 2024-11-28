import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import RefProvider from "../context/ref-context";

const WrapRootProvider = ({ element }: any) => {
  return (
    <Provider store={store}>
      <RefProvider>{element}</RefProvider>
    </Provider>
  );
};

export default WrapRootProvider;
