import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import SearchBar from "../components/SearchBar";
import SideMenu from "../components/SideMenu";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const location = useLocation();

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
    ? ""
    : classes.hide;

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
            <ul
              className={`${classes.blogSubmenuContainer} ${hideBlogSubmenu}`}
            >
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
            className={classes.sideMenuButton}
            onClick={() => {
              setSideMenuOpen((prevState) => !prevState);
            }}
          >
            sideMenuButton
          </button>
          {sideMenuOpen && <SideMenu setSearchOpen={setSearchOpen} />}
        </section>
      </nav>
      {searchOpen && <SearchBar />}
    </header>
  );
};

export default Header;
