import "../css/header.css";
import { ModalLink } from "./ModalLink";
import { Navitem } from "./NavItem";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <>
      <header className="main-header container container-lg">
        <Navbar>
          <Navitem buttonText="Dropdown Js" customClassname="dropdown-js">
            <ModalLink
              linkText="Modal Registration JS"
              stateToSet="registration-form"
              dataModalLink="registration"
            />
          </Navitem>
        </Navbar>
      </header>
    </>
  );
}
