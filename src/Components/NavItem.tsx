import { ReactNode } from "react";
import { useDropdownMenus } from "./Providers/DropdownMenuProvider";

export function Navitem({
  customClassname,
  buttonText,
  children,
}: {
  customClassname: string;
  buttonText: string;
  children: ReactNode;
}) {
  const { dropdownMenuState, setDropdownMenuState } = useDropdownMenus();
  const checkIfStateIsActive = (state: string) =>
    dropdownMenuState === state ? "active" : "";
  return (
    <li className={`nav-item ${customClassname}`}>
      <a href="#" className="nav-link">
        <div
          className={`dropdown ${checkIfStateIsActive("registration-menu")}`}
          data-dropdown
        >
          <button
            className="dropdown-button btn"
            data-dropdown-button
            onClick={() => {
              setDropdownMenuState("registration-menu");
            }}
          >
            {buttonText}
          </button>
          <div className={`dropdown-menu`} data-dropdown-menu>
            {children}
          </div>
        </div>
      </a>
    </li>
  );
}
