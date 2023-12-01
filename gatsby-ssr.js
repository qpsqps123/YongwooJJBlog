import * as React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ko-KR" });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/leonsans/leon-sans-fonts/LeonSans-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/kopubworld/KoPubWorld-Batang-Pro-Light-Subset.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard/files/Pretendard-ExtraLight-Subset.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
  ]);
};
