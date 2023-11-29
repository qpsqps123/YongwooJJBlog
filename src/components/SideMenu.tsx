import React, { useState } from "react";
import * as classes from "./SideMenu.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import ThemeMenu from "./ThemeMenu";

interface Props {
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ setSearchOpen }: Props) => {
  const [userThemeOpen, setUserThemeOpen] = useState<boolean>(false);

  return (
    <ul className={classes.sideMenuList}>
      <li>
        <button
          type="button"
          onClick={() => setSearchOpen((prevState) => !prevState)}
          className={classes.searchButton}
        >
          <StaticImage
            src="../images/icon/searchIcon.png"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </button>
      </li>
      <li className={classes.changeThemeList}>
        <button
          type="button"
          className={classes.changeThemeButton}
          onClick={() => {
            setUserThemeOpen((prevState) => !prevState);
          }}
        >
          theme
        </button>
        {userThemeOpen && <ThemeMenu />}
      </li>
    </ul>
  );
};

export default SideMenu;
