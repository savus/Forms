import { ReactNode, createContext, useContext, useState } from "react";
import { TModalActiveState, TDropdownMenuState } from "../../types";

type TMenuProvider = {
  dropdownMenuState: TDropdownMenuState;
  setDropdownMenuState: (dropdownMenuState: TDropdownMenuState) => void;
  modalActiveState: TModalActiveState;
  setModalActiveState: (activeModalState: TModalActiveState) => void;
};

const MenuContext = createContext({} as TMenuProvider);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [dropdownMenuState, setDropdownMenuState] =
    useState<TDropdownMenuState>("none");
  const [modalActiveState, setModalActiveState] =
    useState<TModalActiveState>("none");
  return (
    <div
      className="page-container"
      onClick={(e) => {
        const target = e.target as HTMLButtonElement;
        const isDropdownButton = target.matches("[data-dropdown-button]");
        const dropdownMenu = target.closest("[data-dropdown-menu]");

        if (!isDropdownButton && dropdownMenu != null) return;
        if (dropdownMenuState != "none") setDropdownMenuState("none");
      }}
    >
      <MenuContext.Provider
        value={{
          dropdownMenuState,
          setDropdownMenuState,
          modalActiveState,
          setModalActiveState,
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  );
};

export const useMenus = () => useContext(MenuContext);
