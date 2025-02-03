import React, { useContext } from "react";
import * as classes from "./SideMenu.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { RefContext } from "@/context/ref-context";
import { navigate } from "gatsby";

const ThemeMenu = React.lazy(() => import("@/components/header/ThemeMenu"));

const SideMenu = () => {
  const {
    headerVisibilityRef,
    sideMenuVisibilityRef,
    sideMenuButtonRef,
    searchButtonRef,
    changeThemeButtonRef,
    tagBtnRef,
    searchVisibilityRef,
    searchInputRef,
    themeMenuVisibilityRef,
  } = useContext(RefContext);

  const handleSearchButtonClick = () => {
    searchVisibilityRef?.current?.classList.toggle("hide");
    headerVisibilityRef?.current?.classList.toggle("handleHeaderHeightOverflow");

    searchButtonRef?.current?.setAttribute(
      "aria-expanded",
      `${searchButtonRef?.current?.getAttribute("aria-expanded") === "false"}`
    );

    searchInputRef?.current?.focus();
  };

  const handleChangeThemeButtonKeyDown = (e: React.KeyboardEvent) => {
    if (themeMenuVisibilityRef?.current?.classList.contains("hide") && !e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      sideMenuButtonRef?.current?.focus();
    } else if (!searchVisibilityRef?.current?.classList.contains("hide") && e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      searchInputRef?.current?.focus();
    }
  };

  return (
    <React.Suspense fallback="Loading...">
      <ul id="sideMenuContainer" className={classes.sideMenuList} ref={sideMenuVisibilityRef}>
        <li>
          <button
            type="button"
            ref={searchButtonRef}
            data-invert
            onClick={handleSearchButtonClick}
            onKeyDown={(e) => {
              if (!searchVisibilityRef?.current?.classList.contains("hide") && !e.shiftKey && e.key === "Tab") {
                e.preventDefault();
                searchInputRef?.current?.focus();
              }
            }}
            className={classes.searchButton}
            aria-label="검색 메뉴"
            aria-controls="searchWrapper"
            aria-expanded="false"
          >
            <StaticImage src="../../images/icon/searchIcon.png" alt="검색 아이콘" width={20} height={20} />
          </button>
        </li>
        <li className={classes.changeThemeList}>
          <button
            type="button"
            ref={changeThemeButtonRef}
            data-invert
            className={classes.changeThemeButton}
            onClick={() => {
              themeMenuVisibilityRef?.current?.classList.toggle("hide");

              changeThemeButtonRef?.current?.setAttribute(
                "aria-expanded",
                `${changeThemeButtonRef?.current?.getAttribute("aria-expanded") === "false"}`
              );
            }}
            onKeyDown={handleChangeThemeButtonKeyDown}
            aria-label="테마 변경 메뉴"
            aria-controls="themeMenuContainer"
            aria-expanded="false"
          >
            <StaticImage src="../../images/icon/chageThemeIcon.png" alt="테마 변경 아이콘" width={30} height={30} />
          </button>
          <ThemeMenu />
        </li>
        <li>
          <button type="button" ref={tagBtnRef} data-invert className={classes.tagBtn} onClick={() => navigate("/blog/tags")}>
            <StaticImage src="../../images/icon/tag.png" alt="태그 아이콘" width={20} height={20} />
          </button>
        </li>
      </ul>
    </React.Suspense>
  );
};

export default SideMenu;
