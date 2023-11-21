import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";
import SearchBar from "../components/SearchBar";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const location = useLocation();

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

  const handleSearchOpen = () => {
    setSearchOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <h1 className="a11yHidden">Yongwoo JJ Blog</h1>
      <nav className={classes.navigation}>
        <h2 className="a11yHidden">Navigation</h2>
        <Link to="/info" className={classes.logo}>
          Yongwoo.
          <br />
          Jeong
        </Link>
        <ul className={classes.menuContainer}>
          <li>
            <Link to="/info" className={InfoMenuHoverColor}>
              INFO
            </Link>
          </li>
          {/* <li>
              <Link to="/projects">PROJECTS</Link>
            </li> */}
          <li className={classes.blogMenu}>
            <Link to="/blog/learn/1" className={blogMenuHoverColor}>
              BLOG
            </Link>
            <ul
              className={`${classes.blogSubmenuContainer} ${hideBlogSubmenu}`}
            >
              <li>
                <Link to="/blog/life/1" className={lifeMenuHoverColor}>
                  LIFE
                </Link>
              </li>
              <li>
                <Link to="/blog/learn/1" className={learnMenuHoverColor}>
                  LEARN
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleSearchOpen}
          className={classes.search}
        >
          <StaticImage
            src="../images/icon/searchIcon.png"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </button>
      </nav>
      {searchOpen && <SearchBar />}
    </header>
  );
};

export default Header;
