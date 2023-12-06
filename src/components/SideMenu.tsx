import React, { useEffect } from "react";
import * as classes from "./SideMenu.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import ThemeMenu from "./ThemeMenu";
import uiSlice from "../store/ui-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

const SideMenu = () => {
  const useAppDispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const showThemeMenu = useAppSelector((state) => state.ui.showThemeMenu);
  const executed = useAppSelector((state) => state.ui.executed);

  useEffect(() => {
    if (executed) {
      document
        .getElementById("changeThemeButton")
        ?.classList.add("pointerEventNone");
      setTimeout(() => {
        document
          .getElementById("changeThemeButton")
          ?.classList.remove("pointerEventNone");
      }, 1000);

      useAppDispatch(uiSlice.actions.hideThemeMenu());
    }
  }, []);

  return (
    <ul className={classes.sideMenuList}>
      <li>
        <button
          type="button"
          onClick={() => {
            useAppDispatch(uiSlice.actions.toggleSearchVisibility());
          }}
          className={classes.searchButton}
        >
          <StaticImage
            src="../images/icon/searchIcon.png"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </button>
      </li>
      <li className={classes.changeThemeList}>
        <button
          id="changeThemeButton"
          type="button"
          className={classes.changeThemeButton}
          onClick={() => {
            useAppDispatch(uiSlice.actions.toggleThemeMenuVisibility());
          }}
        >
          theme
        </button>
        {showThemeMenu && <ThemeMenu />}
      </li>
    </ul>
  );
};

export default SideMenu;
