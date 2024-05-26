import { ReactNode } from "react";

export function Navitem({
  customClassname,
  buttonText,
  children,
}: {
  customClassname: string;
  buttonText: string;
  children: ReactNode;
}) {
  return (
    <li className={`nav-item ${customClassname}`}>
      <a href="#" className="nav-link">
        <div className="dropdown" data-dropdown>
          <button className="dropdown-button btn" data-dropdown-button>
            {buttonText}
          </button>
          <div className="dropdown-menu" data-dropdown-menu>
            {children}
          </div>
        </div>
      </a>
    </li>
  );
}
