import React, { useContext, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import SearchBar from "../components/SearchBar";
import SideMenu from "../components/SideMenu";
import { StaticImage } from "gatsby-plugin-image";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { RefContext } from "../context/refContext";

const Header = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const location = useLocation();

  const themeChange = useAppSelector((state) => state.ui.themeChange);

  const {
    sideMenuButtonRef,
    sideMenuVisibilityRef,
    changeThemeButtonRef,
    searchButtonRef,
    searchVisibilityRef,
    themeMenuVisibilityRef,
    closeSearchButtonRef,
    contactGithubIconRef,
  } = useContext(RefContext);

  // 사이트 최초 접속 시, 사용자 테마 설정 불러오기
  useEffect(() => {
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

  // 사용자 테마 설정에 따른 이미지 변환
  useEffect(() => {
    const checkThemeIsDark = document.body.classList.contains("dark-theme");

    if (checkThemeIsDark) {
      sideMenuButtonRef?.current?.classList.add("invertColor");
      changeThemeButtonRef?.current?.classList.add("invertColor");
      searchButtonRef?.current?.classList.add("invertColor");
      closeSearchButtonRef?.current?.classList.add("invertColor");
      contactGithubIconRef?.current?.classList.add("invertColor");
    } else if (!checkThemeIsDark) {
      sideMenuButtonRef?.current?.classList.remove("invertColor");
      changeThemeButtonRef?.current?.classList.remove("invertColor");
      searchButtonRef?.current?.classList.remove("invertColor");
      closeSearchButtonRef?.current?.classList.remove("invertColor");
      contactGithubIconRef?.current?.classList.remove("invertColor");
    }
  }, [themeChange]);

  // 사이드 메뉴의 display 속성을 이용한 동적 렌더링과 애니메이션
  const handleSideMenuClick = () => {
    sideMenuVisibilityRef?.current?.classList.toggle("hide");
    searchButtonRef?.current?.classList.add("showSearchButtonAnimation");
    changeThemeButtonRef?.current?.classList.add("showThemeButtonAnimation");

    // 애니메이션 실행 중 클릭 방지
    if (sideMenuVisibilityRef?.current?.classList.contains("hide") === false) {
      changeThemeButtonRef?.current?.classList.add("pointerEventNone");
      setTimeout(() => {
        changeThemeButtonRef?.current?.classList.remove("pointerEventNone");
      }, 1000);
    }

    // 열린 하위 메뉴들 닫기
    themeMenuVisibilityRef?.current?.classList.add("hide");
    searchVisibilityRef?.current?.classList.add("hide");

    if (sideMenuVisibilityRef?.current?.classList.contains("hide") === true) {
      sideMenuVisibilityRef.current.classList.remove("hide"); // 애니메이션을 실행하는 동안 보이기

      searchButtonRef?.current?.classList.add("hideSearchButtonAnimation");
      changeThemeButtonRef?.current?.classList.add("hideThemeButtonAnimation");

      setTimeout(() => {
        sideMenuVisibilityRef.current?.classList.add("hide");

        searchButtonRef?.current?.classList.remove("hideSearchButtonAnimation");
        changeThemeButtonRef?.current?.classList.remove(
          "hideThemeButtonAnimation"
        );
      }, 500);
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
          <SideMenu />
        </section>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
