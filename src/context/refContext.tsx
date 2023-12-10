import React, { useRef, createContext, PropsWithChildren } from "react";

export const RefContext = createContext<RefPropsType>({});

interface RefPropsType {
  sideMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  searchVisibilityRef?: React.RefObject<HTMLDivElement>;
  themeMenuVisibilityRef?: React.RefObject<HTMLUListElement>;
  sideMenuButtonRef?: React.RefObject<HTMLButtonElement>;
  changeThemeButtonRef?: React.RefObject<HTMLButtonElement>;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
  closeSearchButtonRef?: React.RefObject<HTMLButtonElement>;
  searchInputRef?: React.RefObject<HTMLInputElement>;
  themeButtonRef?: React.RefObject<HTMLButtonElement[]>;
}

const RefProvider = ({ children }: PropsWithChildren<{}>) => {
  const sideMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const searchVisibilityRef = useRef<HTMLDivElement>(null);
  const themeMenuVisibilityRef = useRef<HTMLUListElement>(null);
  const sideMenuButtonRef = useRef<HTMLButtonElement>(null);
  const changeThemeButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const closeSearchButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement[]>([]);

  return (
    <RefContext.Provider
      value={{
        sideMenuVisibilityRef,
        searchVisibilityRef,
        themeMenuVisibilityRef,
        sideMenuButtonRef,
        changeThemeButtonRef,
        searchButtonRef,
        closeSearchButtonRef,
        searchInputRef,
        themeButtonRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;
