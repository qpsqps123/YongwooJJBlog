export interface IRefProps {
  $headerVisibleRef?: React.RefObject<HTMLElement>;
  $sideMenuVisibleRef?: React.RefObject<HTMLUListElement>;
  $searchVisibleRef?: React.RefObject<HTMLDivElement>;
  $themeMenuVisibleRef?: React.RefObject<HTMLUListElement>;
  $sideMenuBtnRef?: React.RefObject<HTMLButtonElement>;
  $changeThemeBtnRef?: React.RefObject<HTMLButtonElement>;
  $searchBtnRef?: React.RefObject<HTMLButtonElement>;
  $themeBtnRef?: React.RefObject<HTMLButtonElement[]>;
  $tagBtnRef?: React.RefObject<HTMLButtonElement>;
  $searchInputRef?: React.RefObject<HTMLInputElement>;
  $contactGithubIconRef?: React.RefObject<HTMLAnchorElement>;
  $displayedCursorRef?: React.RefObject<HTMLDivElement>;
  actualCursorXRef?: React.MutableRefObject<number>;
  actualCursorYRef?: React.MutableRefObject<number>;
  displayedCursorXRef?: React.MutableRefObject<number>;
  displayedCursorYRef?: React.MutableRefObject<number>;
}
