import "../css/header.css";
import { Navitem } from "./NavItem";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="main-header container container-lg">
      <Navbar>
        <Navitem />
      </Navbar>
    </header>
  );
}
