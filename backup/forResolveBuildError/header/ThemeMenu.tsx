import React, { useContext, useEffect } from "react";
import * as classes from "./ThemeMenu.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import uiSlice from "@/store/ui-slice";
import { RefContext } from "@/context/ref-context";

const ThemeMenu = () => {
  const useAppDispatch = useDispatch<AppDispatch>();

  const { themeMenuVisibilityRef, themeButtonRef, sideMenuButtonRef } = useContext(RefContext);

  useEffect(() => {
    const localStorageUserTheme = localStorage.getItem("theme");

    const [osThemeButtonElement, defaultThemeButtonElement, darkThemeButtonElement] = themeButtonRef?.current || [];
    if (localStorageUserTheme === "osDefault") {
      osThemeButtonElement.classList.add(classes.isSelected);
    } else if (localStorageUserTheme === "default") {
      defaultThemeButtonElement.classList.add(classes.isSelected);
    } else if (localStorageUserTheme === "dark") {
      darkThemeButtonElement.classList.add(classes.isSelected);
    }
  }, []);

  const handleThemeSelected = (e: React.MouseEvent) => {
    const localStorageUserTheme = localStorage.getItem("theme");
    const { name } = e.target as HTMLButtonElement;
    const [osThemeButtonElement, defaultThemeButtonElement, darkThemeButtonElement] = themeButtonRef?.current || [];

    if (name === "osDefault") {
      if (localStorageUserTheme === "osDefault") return;

      document.body.classList.remove("osDefault-theme"); // 기존 테마 삭제
      document.body.classList.remove("default-theme");
      document.body.classList.remove("dark-theme");
      window.matchMedia("(prefers-color-scheme: dark)").matches // 선택된 테마 적용
        ? document.body.classList.add("dark-theme")
        : document.body.classList.add("default-theme");
      osThemeButtonElement.classList.add(classes.isSelected); // 선택된 테마 메뉴 표시
      defaultThemeButtonElement.classList.remove(classes.isSelected);
      darkThemeButtonElement.classList.remove(classes.isSelected);
      localStorage.setItem("theme", "osDefault"); // 사용자 테마 설정 로컬 스토리지 저장
    } else if (name === "default") {
      if (localStorageUserTheme === "default") return;

      document.body.classList.remove("osDefault-theme");
      document.body.classList.remove("dark-theme");
      document.body.classList.add("default-theme");
      osThemeButtonElement.classList.remove(classes.isSelected);
      defaultThemeButtonElement.classList.add(classes.isSelected);
      darkThemeButtonElement.classList.remove(classes.isSelected);
      localStorage.setItem("theme", "default");
    } else if (name === "dark") {
      if (localStorageUserTheme === "dark") return;

      document.body.classList.remove("osDefault-theme");
      document.body.classList.remove("default-theme");
      document.body.classList.add("dark-theme");
      osThemeButtonElement.classList.remove(classes.isSelected);
      defaultThemeButtonElement.classList.remove(classes.isSelected);
      darkThemeButtonElement.classList.add(classes.isSelected);
      localStorage.setItem("theme", "dark");
    }

    useAppDispatch(uiSlice.actions.detectThemeChange()); //  사용자 테마 변경 감지
  };

  return (
    <ul id="themeMenuContainer" className={`${classes.themeMenuContainer} ${"hide"}`} ref={themeMenuVisibilityRef}>
      <li>
        <button
          name="osDefault"
          type="button"
          className={classes.osThemeButton}
          onClick={handleThemeSelected}
          ref={(element) => {
            if (themeButtonRef?.current) {
              themeButtonRef.current[0] = element as HTMLButtonElement;
            }
          }}
        >
          OS Default
        </button>
      </li>
      <li>
        <button
          name="default"
          type="button"
          className={classes.lightThemeButton}
          onClick={handleThemeSelected}
          ref={(element) => {
            if (themeButtonRef?.current) {
              themeButtonRef.current[1] = element as HTMLButtonElement;
            }
          }}
        >
          Light
        </button>
      </li>
      <li>
        <button
          name="dark"
          type="button"
          className={classes.darkThemeButton}
          onClick={handleThemeSelected}
          onKeyDown={(e) => {
            if (!e.shiftKey && e.key === "Tab") {
              e.preventDefault();
              sideMenuButtonRef?.current?.focus();
            }
          }}
          ref={(element) => {
            if (themeButtonRef?.current) {
              themeButtonRef.current[2] = element as HTMLButtonElement;
            }
          }}
        >
          Dark
        </button>
      </li>
    </ul>
  );
};

export default ThemeMenu;
