import { ReactNode, createContext, useContext, useState } from "react";
import { TDropdownMenuState } from "../../types";

type TDropdownMenuProvider = {
  dropdownMenuState: TDropdownMenuState;
  setDropdownMenuState: (dropdownMenuState: TDropdownMenuState) => void;
};

const DropdownMenuContext = createContext({} as TDropdownMenuProvider);

export const DropdownMenuProvider = ({ children }: { children: ReactNode }) => {
  const [dropdownMenuState, setDropdownMenuState] =
    useState<TDropdownMenuState>("none");
  return (
    <div
      onClick={(e) => {
        const target = e.target as HTMLButtonElement;
        const isDropdownButton = target.matches("[data-dropdown-button]");
        const dropdownMenu = target.closest("[data-dropdown-menu]");

        if (!isDropdownButton && dropdownMenu != null) return;
        if (dropdownMenuState != "none") setDropdownMenuState("none");
      }}
    >
      <DropdownMenuContext.Provider
        value={{ dropdownMenuState, setDropdownMenuState }}
      >
        {children}
      </DropdownMenuContext.Provider>
    </div>
  );
};

export const useDropdownMenus = () => useContext(DropdownMenuContext);
