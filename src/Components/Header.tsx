import "../css/header.css";
import { Navitem } from "./NavItem";
import { Navbar } from "./Navbar";
import { TextInput } from "./TextInput";

export function Header() {
  return (
    <>
      <header className="main-header container container-lg">
        <Navbar>
          <Navitem buttonText="Dropdown Js">
            <div className="modal-link" data-modal-link="registration">
              Login Modal Js
            </div>
          </Navitem>
        </Navbar>
      </header>

      <div className="registration-modal" data-modal="registration">
        <form action="#" className="registration-form modal-body">
          <h4 className="form-header">Registration Form</h4>
          <TextInput
            labelText="Username"
            inputProps={{
              placeholder: "username",
              type: "text",
              name: "username",
              id: "username",
            }}
          />
          <TextInput
            labelText="Password"
            inputProps={{
              placeholder: "password",
              type: "password",
              name: "password",
              id: "password",
            }}
          />
          <TextInput
            labelText="City"
            inputProps={{
              placeholder: "city",
              type: "text",
              name: "city",
              id: "city",
            }}
          />
          <div className="phone-input-container">
            <div>Phone #</div>
            <TextInput
              labelText=""
              inputProps={{
                placeholder: "111",
                type: "text",
                name: "phone",
              }}
            />
            -
            <TextInput
              labelText=""
              inputProps={{
                placeholder: "111",
                type: "text",
                name: "phone",
              }}
            />
            -
            <TextInput
              labelText=""
              inputProps={{
                placeholder: "1111",
                type: "text",
                name: "phone",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
