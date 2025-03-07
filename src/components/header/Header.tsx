import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { RefContext } from "@/context/ref-context";
import SideMenu from "@/components/header/SideMenu";
import SearchBar from "@/components/header/SearchBar";
import { animSideMenuFadeAway, animSideMenuPop } from "@/animation/anim-side-menu";
import { preventClick } from "@/animation/anim-utils";

const Header = () => {
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
    tagBtnRef,
  } = useContext(RefContext);

  // 테마가 변경될 때 적용(리렌더링)되도록 만듬.
  useEffect(() => {
  }, [themeChange]);

  const handleSideMenuClick = () => {
    sideMenuVisibilityRef?.current?.classList.toggle("sideMenuPoped");

    // 애니메이션 실행 중에 사이드 메뉴 버튼 클릭 방지.
    if (sideMenuButtonRef?.current && searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
      preventClick([sideMenuButtonRef.current, searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current], 1.3);
    }

    if (sideMenuVisibilityRef?.current?.classList.contains("sideMenuPoped") === false) {
      // 열린 하위 메뉴들 닫기
      searchVisibilityRef?.current?.classList.add("hide");
      themeMenuVisibilityRef?.current?.classList.add("hide");
      headerVisibilityRef?.current?.classList.remove("handleHeaderHeightOverflow");

      // 애니메이션
      if (searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
        animSideMenuFadeAway([searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current]);
      }
    } else if (sideMenuVisibilityRef?.current?.classList.contains("sideMenuPoped") === true) {
      if (searchButtonRef?.current && changeThemeButtonRef?.current && tagBtnRef?.current) {
        animSideMenuPop([searchButtonRef?.current, changeThemeButtonRef?.current, tagBtnRef?.current]);
      }
    }

    // 사이드 메뉴 접근성
    sideMenuButtonRef?.current?.setAttribute(
      "aria-expanded",
      `${sideMenuButtonRef?.current?.getAttribute("aria-expanded") === "false"}`
    );
  };

  const sideMenuAnimInProgress = useRef(false)

  const handleSideMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // 애니메이션 실행 중 사이드 메뉴 버튼 키 입력 방지.
    if (e.key === "Enter" || e.key === " ") {
      if (sideMenuAnimInProgress.current) {
        e.preventDefault();
        return;
      }

      sideMenuAnimInProgress.current = true
      setTimeout(() => {
        sideMenuAnimInProgress.current = false
      }, 1300);
    }
  }

  // 헤더 네비게이션 메뉴 Accent 효과
  const infoMenuHoverColor = location.pathname.includes("/info/") ? classes.colorRed : "";
  const projectsMenuHoverColor = location.pathname.includes("/projects/") ? classes.colorRed : "";
  const blogMenuHoverColor = location.pathname.includes("/blog") ? classes.colorRed : "";
  const lifeMenuHoverColor = location.pathname.includes("/blog/life/") ? classes.colorRed : "";
  const learnMenuHoverColor = location.pathname.includes("/blog/learn/") ? classes.colorRed : "";
  const hideBlogSubmenu = location.pathname.includes("/blog") ? classes.blogSubmenuContainer : "hide";
  const blogSubmenuVisibility = location.pathname.includes("/blog") ? "true" : "false";

  return (
    <header className={classes.header} ref={headerVisibilityRef}>
      <nav className={classes.navigation}>
        <section className={classes.logo}>
          <Link to="/info" aria-label="Yongwoo Jeong - 소개 페이지로 연결.">
            Yongwoo.
            <br />
            Jeong
          </Link>
        </section>
        <section className={classes.menuWrapper}>
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
          <button
            type="button"
            ref={sideMenuButtonRef}
            data-invert
            className={classes.sideMenuButton}
            onClick={handleSideMenuClick}
            aria-label="사이드 메뉴"
            aria-controls="sideMenuContainer"
            aria-expanded="false"
            onKeyDown={handleSideMenuButtonKeyDown}
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
