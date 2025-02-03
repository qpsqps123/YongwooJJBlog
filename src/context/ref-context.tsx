import { IRefProps } from "@/types/context/ref-context";
import React, { useRef, createContext, PropsWithChildren } from "react";

export const RefContext = createContext<IRefProps>({});

const RefProvider = ({ children }: PropsWithChildren<{}>) => {
  const headerVisibilityRef = useRef<HTMLElement>(null);
  const sideMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const searchVisibilityRef = useRef<HTMLDivElement>(null);
  const themeMenuVisibilityRef = useRef<HTMLUListElement>(null);

  const sideMenuButtonRef = useRef<HTMLButtonElement>(null);
  const changeThemeButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement[]>([]);
  const tagBtnRef = useRef<HTMLButtonElement>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const contactGithubIconRef = useRef<HTMLAnchorElement>(null);

  return (
    <RefContext.Provider
      value={{
        headerVisibilityRef,
        sideMenuVisibilityRef,
        searchVisibilityRef,
        themeMenuVisibilityRef,
        sideMenuButtonRef,
        changeThemeButtonRef,
        searchButtonRef,
        searchInputRef,
        themeButtonRef,
        tagBtnRef,
        contactGithubIconRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;
