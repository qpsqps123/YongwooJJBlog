import React, { useContext } from "react";
import * as classes from "./SideMenu.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import ThemeMenu from "./ThemeMenu";
import { RefContext } from "../context/refContext";

const SideMenu = () => {
  const {
    sideMenuVisibilityRef,
    searchButtonRef,
    changeThemeButtonRef,
    searchVisibilityRef,
    searchInputRef,
    themeMenuVisibilityRef,
  } = useContext(RefContext);

  return (
    <ul
      className={`${classes.sideMenuList} ${"hide"}`}
      ref={sideMenuVisibilityRef}
    >
      <li>
        <button
          type="button"
          ref={searchButtonRef}
          onClick={() => {
            searchVisibilityRef?.current?.classList.toggle("hide");
            searchInputRef?.current?.focus();
          }}
          className={classes.searchButton}
          aria-label="검색 메뉴"
        >
          <StaticImage
            src="../images/icon/searchIcon.png"
            alt="검색 아이콘"
            width={20}
            height={20}
          />
        </button>
      </li>
      <li className={classes.changeThemeList}>
        <button
          type="button"
          ref={changeThemeButtonRef}
          className={classes.changeThemeButton}
          onClick={() => {
            themeMenuVisibilityRef?.current?.classList.toggle("hide");
          }}
          aria-label="테마 변경 메뉴"
        >
          <StaticImage
            src="../images/icon/chageThemeIcon.png"
            alt="테마 변경 아이콘"
            width={30}
            height={30}
          />
        </button>
        <ThemeMenu />
      </li>
    </ul>
  );
};

export default SideMenu;
