import { IRefProps } from "@/types/context/ref-context";
import React, { useRef, createContext, PropsWithChildren } from "react";

export const RefContext = createContext<IRefProps>({});

const RefProvider = ({ children }: PropsWithChildren<{}>) => {
  const $headerVisibleRef = useRef<HTMLElement>(null);
  const $sideMenuVisibleRef = useRef<HTMLUListElement>(null);
  const $searchVisibleRef = useRef<HTMLDivElement>(null);
  const $themeMenuVisibleRef = useRef<HTMLUListElement>(null);

  const $sideMenuBtnRef = useRef<HTMLButtonElement>(null);
  const $changeThemeBtnRef = useRef<HTMLButtonElement>(null);
  const $searchBtnRef = useRef<HTMLButtonElement>(null);
  const $themeBtnRef = useRef<HTMLButtonElement[]>([]);
  const $tagBtnRef = useRef<HTMLButtonElement>(null);

  const $searchInputRef = useRef<HTMLInputElement>(null);

  const $contactGithubIconRef = useRef<HTMLAnchorElement>(null);

  const $displayedCursorRef = useRef<HTMLDivElement>(null);
  const actualCursorXRef = useRef<number>(0);
  const actualCursorYRef = useRef<number>(0);
  const displayedCursorXRef = useRef<number>(0);
  const displayedCursorYRef = useRef<number>(0);

  return (
    <RefContext.Provider
      value={{
        $headerVisibleRef,
        $sideMenuVisibleRef,
        $searchVisibleRef,
        $themeMenuVisibleRef,
        $sideMenuBtnRef,
        $changeThemeBtnRef,
        $searchBtnRef,
        $searchInputRef,
        $themeBtnRef,
        $tagBtnRef,
        $contactGithubIconRef,
        $displayedCursorRef,
        actualCursorXRef,
        actualCursorYRef,
        displayedCursorXRef,
        displayedCursorYRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;
