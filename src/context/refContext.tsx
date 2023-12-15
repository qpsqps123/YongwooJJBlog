import React, { useRef, createContext, PropsWithChildren } from "react";

export const RefContext = createContext<RefPropsType>({});

interface RefPropsType {
  headerVisibilityRef?: React.RefObject<HTMLElement>;
  sideMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  searchVisibilityRef?: React.RefObject<HTMLDivElement>;
  themeMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  sideMenuButtonRef?: React.RefObject<HTMLButtonElement>;
  changeThemeButtonRef?: React.RefObject<HTMLButtonElement>;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
  closeSearchButtonRef?: React.RefObject<HTMLButtonElement>;
  themeButtonRef?: React.RefObject<HTMLButtonElement[]>;
  searchInputRef?: React.RefObject<HTMLInputElement>;
  contactGithubIconRef?: React.RefObject<HTMLAnchorElement>;
}

const RefProvider = ({ children }: PropsWithChildren<{}>) => {
  const headerVisibilityRef = useRef<HTMLElement>(null);
  const sideMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const searchVisibilityRef = useRef<HTMLDivElement>(null);
  const themeMenuVisibilityRef = useRef<HTMLUListElement>(null);

  const sideMenuButtonRef = useRef<HTMLButtonElement>(null);
  const changeThemeButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const closeSearchButtonRef = useRef<HTMLButtonElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement[]>([]);

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
        closeSearchButtonRef,
        searchInputRef,
        themeButtonRef,
        contactGithubIconRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;
