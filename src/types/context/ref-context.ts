export interface IRefProps {
  headerVisibilityRef?: React.RefObject<HTMLElement>;
  sideMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  searchVisibilityRef?: React.RefObject<HTMLDivElement>;
  themeMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  sideMenuButtonRef?: React.RefObject<HTMLButtonElement>;
  changeThemeButtonRef?: React.RefObject<HTMLButtonElement>;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
  themeButtonRef?: React.RefObject<HTMLButtonElement[]>;
  tagBtnRef?: React.RefObject<HTMLButtonElement>;
  searchInputRef?: React.RefObject<HTMLInputElement>;
  contactGithubIconRef?: React.RefObject<HTMLAnchorElement>;
}
