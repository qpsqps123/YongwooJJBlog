import * as React from "react";

export const onRenderBody = ({ setHeadComponents }: any) => {
  setHeadComponents([
    <link
      rel="preload"
      href="./static/fonts/leonsans/leon-sans-fonts/LeonSans-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="./static/fonts/kopubworld/KoPubWorld Batang_Pro Medium_Subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
