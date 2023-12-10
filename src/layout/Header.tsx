import React, { useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import SearchBar from "../components/SearchBar";
import SideMenu from "../components/SideMenu";
import { StaticImage } from "gatsby-plugin-image";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export interface RefPropsType {
  sideMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  searchVisibilityRef?: React.RefObject<HTMLDivElement>;
  themeMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  sideMenuButtonRef?: React.RefObject<HTMLButtonElement>;
  changeThemeButtonRef?: React.RefObject<HTMLButtonElement>;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
  closeSearchButtonRef?: React.RefObject<HTMLButtonElement>;
}

const Header = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const location = useLocation();

  const themeChange = useAppSelector((state) => state.ui.themeChange);

  const sideMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const searchVisibilityRef = useRef<HTMLDivElement>(null);
  const themeMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const sideMenuButtonRef = useRef<HTMLButtonElement>(null);
  const changeThemeButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const closeSearchButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 사이트 최초 접속 시, 사용자 테마 설정 불러오기
    const localStorageUserTheme = localStorage.getItem("theme");

    if (!localStorageUserTheme || localStorageUserTheme === "osDefault") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.body.classList.add("dark-theme")
        : document.body.classList.add("default-theme");
      localStorage.setItem("theme", "osDefault");
    } else if (localStorageUserTheme === "default") {
      document.body.classList.add("default-theme");
      localStorage.setItem("theme", "default");
    } else if (localStorageUserTheme === "dark") {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    // 사용자 테마 설정에 따른 이미지 변환
    const checkThemeIsDark = document.body.classList.contains("dark-theme");

    if (checkThemeIsDark) {
      sideMenuButtonRef.current?.classList.add("invertColor");
      changeThemeButtonRef?.current?.classList.add("invertColor");
      searchButtonRef?.current?.classList.add("invertColor");
      closeSearchButtonRef?.current?.classList.add("invertColor");
    } else if (!checkThemeIsDark) {
      sideMenuButtonRef.current?.classList.remove("invertColor");
      changeThemeButtonRef?.current?.classList.remove("invertColor");
      searchButtonRef?.current?.classList.remove("invertColor");
      closeSearchButtonRef?.current?.classList.remove("invertColor");
    }
  }, [themeChange]);

  const handleSideMenuClick = () => {
    sideMenuVisibilityRef.current?.classList.toggle("hide");

    if (!sideMenuVisibilityRef.current?.classList.contains("hide")) {
      changeThemeButtonRef.current?.classList.add("pointerEventNone"); // 애니메이션 실행 중 클릭 방지
      setTimeout(() => {
        changeThemeButtonRef.current?.classList.remove("pointerEventNone");
      }, 1000);
    } else if (sideMenuVisibilityRef.current?.classList.contains("hide")) {
      themeMenuVisibilityRef.current?.classList.add("hide");
      searchVisibilityRef.current?.classList.add("hide");
    }
  };

  const InfoMenuHoverColor = location.pathname.includes("/info/")
    ? classes.colorRed
    : "";

  const blogMenuHoverColor = location.pathname.includes("/blog")
    ? classes.colorRed
    : "";

  const lifeMenuHoverColor = location.pathname.includes("/blog/life/")
    ? classes.colorRed
    : "";

  const learnMenuHoverColor = location.pathname.includes("/blog/learn/")
    ? classes.colorRed
    : "";

  const hideBlogSubmenu = location.pathname.includes("/blog")
    ? classes.blogSubmenuContainer
    : "hide";

  return (
    <header className={classes.header}>
      <h1 className="a11yHidden">Yongwoo JJ Blog</h1>
      <nav className={classes.navigation}>
        <h2 className="a11yHidden">Page Navigation</h2>
        <Link
          to="/info"
          className={classes.logo}
          aria-label="로고. 소개 페이지로 연결."
        >
          Yongwoo.
          <br />
          Jeong
        </Link>
        <ul className={classes.menuContainer}>
          <li>
            <Link to="/info" className={InfoMenuHoverColor} aria-label="소개">
              INFO
            </Link>
          </li>
          {/* <li>
              <Link to="/projects">PROJECTS</Link>
            </li> */}
          <li className={classes.blogMenu}>
            <Link
              to="/blog/learn/1"
              className={blogMenuHoverColor}
              aria-label="블로그. 하위 메뉴인 배움 게시판으로 연결."
            >
              BLOG
            </Link>
            <ul className={hideBlogSubmenu}>
              <li>
                <Link
                  to="/blog/life/1"
                  className={lifeMenuHoverColor}
                  aria-label="일상 게시판"
                >
                  LIFE
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/learn/1"
                  className={learnMenuHoverColor}
                  aria-label="배움 게시판"
                >
                  LEARN
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <section className={classes.sideMenuContainer}>
          <button
            type="button"
            ref={sideMenuButtonRef}
            className={classes.sideMenuButton}
            onClick={handleSideMenuClick}
            aria-label="사이드 메뉴"
          >
            <StaticImage
              src="../images/icon/hamburgerMenu.png"
              alt="햄버거 메뉴 아이콘"
              width={25}
              height={25}
            />
          </button>
          <SideMenu
            sideMenuVisibilityRef={sideMenuVisibilityRef}
            searchVisibilityRef={searchVisibilityRef}
            themeMenuVisibilityRef={themeMenuVisibilityRef}
            changeThemeButtonRef={changeThemeButtonRef}
            searchButtonRef={searchButtonRef}
          />
        </section>
      </nav>
      <SearchBar
        searchVisibilityRef={searchVisibilityRef}
        closeSearchButtonRef={closeSearchButtonRef}
      />
    </header>
  );
};

export default Header;
