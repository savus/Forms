import "../css/header.css";
import { ModalComponent } from "./ModalComponent";
import { ModalLink } from "./ModalLink";
import { Navitem } from "./NavItem";
import { Navbar } from "./Navbar";
import { DropdownMenuProvider } from "./Providers/MenuProvider";

export function Header() {
  return (
    <>
      <DropdownMenuProvider>
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

        <ModalComponent
          dataName="registration"
          stateToCheck="registration-form"
        />
      </DropdownMenuProvider>
    </>
  );
}
