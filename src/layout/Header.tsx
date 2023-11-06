import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";

const Header = () => {
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

  return (
    <header>
      <h1 className="a11yHidden">Yongwoo JJ Blog</h1>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          Logo
          <br />
          Image
        </div>
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
            <Link to="/blog/learn/0" className={blogMenuHoverColor}>
              BLOG
            </Link>
            <ul
              className={`${classes.blogSubmenuContainer} ${hideBlogSubmenu}`}
            >
              <li>
                <Link to="/blog/life/0" className={lifeMenuHoverColor}>
                  LIFE
                </Link>
              </li>
              <li>
                <Link to="/blog/learn/0" className={learnMenuHoverColor}>
                  LEARN
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className={classes.search}>
          Search
          <br />
          Image
        </div>
      </nav>
    </header>
  );
};

export default Header;
