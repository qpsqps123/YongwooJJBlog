import React, { useContext, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RefContext } from "@/context/ref-context";
import SideMenu from "@/components/header/SideMenu";
import SearchBar from "@/components/header/SearchBar";
import { useDispatch } from "react-redux";
import uiSlice from "@/store/ui-slice";
import { animSideMenuFadeAway, animSideMenuPop } from "@/animation/anim-side-menu";
import { preventClick } from "@/animation/anim-utils";

const Header = () => {
  const useAppDispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const location = useLocation();

  const themeChange = useAppSelector((state) => state.ui.themeChange);

  const {
    headerVisibilityRef,
    sideMenuButtonRef,
    sideMenuVisibilityRef,
    changeThemeButtonRef,
    searchButtonRef,
    searchVisibilityRef,
    themeMenuVisibilityRef,
    themeButtonRef,
    closeSearchButtonRef,
    tagBtnRef,
    contactGithubIconRef,
  } = useContext(RefContext);

  useEffect(() => {
    const checkThemeIsDark = document.body.classList.contains("dark-theme");

    if (checkThemeIsDark) {
      sideMenuButtonRef?.current?.classList.add("invertColor");
      changeThemeButtonRef?.current?.classList.add("invertColor");
      searchButtonRef?.current?.classList.add("invertColor");
      closeSearchButtonRef?.current?.classList.add("invertColor");
      tagBtnRef?.current?.classList.add("invertColor");
      contactGithubIconRef?.current?.classList.add("invertColor");
    } else if (!checkThemeIsDark) {
      sideMenuButtonRef?.current?.classList.remove("invertColor");
      changeThemeButtonRef?.current?.classList.remove("invertColor");
      searchButtonRef?.current?.classList.remove("invertColor");
      closeSearchButtonRef?.current?.classList.remove("invertColor");
      tagBtnRef?.current?.classList.remove("invertColor");
      contactGithubIconRef?.current?.classList.remove("invertColor");
    }
  }, [themeChange]);

  const handleSideMenuClick = () => {
    sideMenuVisibilityRef?.current?.classList.toggle("sideMenuPoped");

    if (sideMenuButtonRef?.current && searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
      preventClick([sideMenuButtonRef.current, searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current], 1.3);
    }

    if (sideMenuVisibilityRef?.current?.classList.contains("sideMenuPoped") === false) {
      // 열린 하위 메뉴들 닫기
      searchVisibilityRef?.current?.classList.add("hide");
      themeMenuVisibilityRef?.current?.classList.add("hide");
      headerVisibilityRef?.current?.classList.remove("handleHeaderHeightOverflow");

      if (searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
        animSideMenuFadeAway([searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current]);
      }
    } else if (sideMenuVisibilityRef?.current?.classList.contains("sideMenuPoped") === true) {
      if (searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
        animSideMenuPop([searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current]);
      }
    }

    sideMenuButtonRef?.current?.setAttribute(
      "aria-expanded",
      `${sideMenuButtonRef?.current?.getAttribute("aria-expanded") === "false"}`
    );

    useAppDispatch(uiSlice.actions.detectThemeChange());
  };

  const infoMenuHoverColor = location.pathname.includes("/info/") ? classes.colorRed : "";

  const projectsMenuHoverColor = location.pathname.includes("/projects/") ? classes.colorRed : "";

  const blogMenuHoverColor = location.pathname.includes("/blog") ? classes.colorRed : "";

  const lifeMenuHoverColor = location.pathname.includes("/blog/life/") ? classes.colorRed : "";

  const learnMenuHoverColor = location.pathname.includes("/blog/learn/") ? classes.colorRed : "";

  const hideBlogSubmenu = location.pathname.includes("/blog") ? classes.blogSubmenuContainer : "hide";

  const blogSubmenuVisibility = location.pathname.includes("/blog") ? "true" : "false";

  return (
    <header className={classes.header} ref={headerVisibilityRef}>
      <h2 className="a11yHidden">Blog Navigation</h2>
      <nav className={classes.navigation}>
        <section className={classes.logo}>
          <h3 className="a11yHidden">Logo</h3>
          <Link to="/info" aria-label="Yongwoo Jeong - 소개 페이지로 연결.">
            Yongwoo.
            <br />
            Jeong
          </Link>
        </section>
        <section className={classes.menuWrapper}>
          <h3 className="a11yHidden">Navigation Menu</h3>
          <ul className={classes.menuContainer}>
            <li>
              <Link to="/info" className={infoMenuHoverColor} aria-label="Info - 소개 페이지로 연결.">
                Info
              </Link>
            </li>
            <li>
              <Link to="/projects" className={projectsMenuHoverColor} aria-label="Projects - 프로젝트 페이지로 연결.">
                Projects
              </Link>
            </li>
            <li className={classes.blogMenu}>
              <Link
                to="/blog/learn/1"
                className={blogMenuHoverColor}
                aria-label="Blog - 하위 메뉴인 배움 게시판으로 연결."
                aria-controls="blogSubmenu"
                aria-expanded={blogSubmenuVisibility}
              >
                Blog
              </Link>
              <ul id="blogSubmenu" className={hideBlogSubmenu}>
                <li>
                  <Link to="/blog/life/1" className={lifeMenuHoverColor} aria-label="Life - 일상 게시판으로 연결.">
                    Life
                  </Link>
                </li>
                <li>
                  <Link to="/blog/learn/1" className={learnMenuHoverColor} aria-label="Learn - 배움 게시판으로 연결.">
                    Learn
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={classes.sideMenuContainer}>
          <h3 className="a11yHidden">Side Menu</h3>
          <button
            type="button"
            ref={sideMenuButtonRef}
            className={classes.sideMenuButton}
            onClick={handleSideMenuClick}
            aria-label="사이드 메뉴"
            aria-controls="sideMenuContainer"
            aria-expanded="false"
            onKeyDown={(e) => {
              if (themeMenuVisibilityRef?.current?.classList.contains("hide") && e.shiftKey && e.key === "Tab") {
                e.preventDefault();
                changeThemeButtonRef?.current?.focus();
              } else if (!themeMenuVisibilityRef?.current?.classList.contains("hide") && e.shiftKey && e.key === "Tab") {
                e.preventDefault();
                if (themeButtonRef?.current) {
                  themeButtonRef.current[2].focus();
                }
              }
            }}
          >
            <StaticImage src="../../images/icon/hamburgerMenu.png" alt="햄버거 메뉴 아이콘" width={25} height={25} />
          </button>
          <SideMenu />
        </section>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
