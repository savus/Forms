import { ReactNode } from "react";

export const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};
