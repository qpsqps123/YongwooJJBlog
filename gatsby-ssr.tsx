import * as React from "react";

export const onRenderBody = ({ setHeadComponents }: any) => {
  setHeadComponents([
    <link
      rel="preload"
      href="./static/fonts/leonsans/leon-sans-fonts/LeonSans-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="./static/fonts/kopubworld/KoPubWorld-Batang-Pro-Light-Subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="./static/fonts/Pretendard/files/Pretendard-ExtraLight-Subset.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
    />,
  ]);
};
