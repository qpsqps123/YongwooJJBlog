import "./src/styles/global.scss";
import "prismjs/themes/prism-okaidia.css";
import WrapRootProvider from "./src/layout/WrapRootProvider";
import { useEffect } from "react";
export const wrapRootElement = WrapRootProvider;

export const onClientEntry = () => {
  // 사이트 최초 접속 시, 사용자 테마 설정 불러오기
  const localStorageUserTheme = localStorage.getItem("theme");
  if (!localStorageUserTheme) {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.body.classList.add("dark-theme")
      : document.body.classList.add("default-theme");
    localStorage.setItem("theme", "osDefault");
  } else if (localStorageUserTheme === "osDefault") {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.body.classList.add("dark-theme")
      : document.body.classList.add("default-theme");
  } else if (localStorageUserTheme === "default") {
    document.body.classList.add("default-theme");
  } else if (localStorageUserTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  document.querySelector("body").classList.add("noCursor");
};
