import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import * as classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();

  const InfoMenuLinkColor = location.pathname.includes("/info/")
    ? classes.colorRed
    : "";

  const blogMenuLinkColor =
    location.pathname.includes("/blog/learn/") ||
    location.pathname.includes("/blog/life/")
      ? classes.colorRed
      : "";

  const lifeMenuLinkColor = location.pathname.includes("/blog/life/")
    ? classes.colorRed
    : "";

  const learnMenuLinkColor = location.pathname.includes("/blog/learn/")
    ? classes.colorRed
    : "";

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
            <Link to="/info" className={InfoMenuLinkColor}>
              INFO
            </Link>
          </li>
          {/* <li>
              <Link to="/projects">PROJECTS</Link>
            </li> */}
          <li className={classes.blogMenu}>
            <Link to="/blog/learn" className={blogMenuLinkColor}>
              BLOG
            </Link>
            <ul className={classes.blogSubmenuContainer}>
              <li>
                <Link to="/blog/life" className={lifeMenuLinkColor}>
                  LIFE
                </Link>
              </li>
              <li>
                <Link to="/blog/learn" className={learnMenuLinkColor}>
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
