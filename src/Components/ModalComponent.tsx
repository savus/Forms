import { useState } from "react";
import { TModalActiveState, TPhoneInput } from "../types";
import { useMenus } from "./Providers/MenuProvider";
import { TextInput } from "./TextInput";
import { PhoneInput } from "./PhoneInput";
import { useUsers } from "./Providers/UserProvider";
import toast from "react-hot-toast";

export const ModalComponent = ({
  dataName,
  stateToCheck,
}: {
  dataName: string;
  stateToCheck: TModalActiveState;
}) => {
  const { modalActiveState, setModalActiveState } = useMenus();
  const { registerNewUser } = useUsers();

  const checkIfStateIsActive = (stateToCheck: TModalActiveState) =>
    stateToCheck === modalActiveState ? "active" : "";

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<TPhoneInput>(["", "", ""]);

  const resetValues = () => {
    setUsernameInput("");
    setPasswordInput("");
    setCityInput("");
    setEmailInput("");
    setPhoneInput(["", "", ""]);
  };

  return (
    <div
      onSubmit={(e) => {
        e.preventDefault();
        setModalActiveState("none");
        registerNewUser({
          username: usernameInput,
          password: passwordInput,
          email: emailInput,
          city: cityInput,
          phoneNumber: phoneInput.join("-"),
          isAdmin: false,
        })
          .catch((e) => toast.error(e))
          .finally(resetValues);
      }}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.matches("[data-modal]")) setModalActiveState("none");
      }}
      className={`${dataName}-modal ${checkIfStateIsActive(stateToCheck)}`}
      data-modal={dataName}
    >
      <form action="#" className={`${stateToCheck} modal-body`}>
        <h4 className="form-header">Registration Form JS</h4>
        <TextInput
          labelText="Username"
          inputProps={{
            placeholder: "username",
            type: "text",
            name: "username",
            id: "username",
            value: usernameInput,
            onChange: (e) => setUsernameInput(e.target.value),
          }}
        />
        <TextInput
          labelText="Password"
          inputProps={{
            placeholder: "password",
            type: "password",
            name: "password",
            id: "password",
            value: passwordInput,
            onChange: (e) => setPasswordInput(e.target.value),
          }}
        />
        <TextInput
          labelText="City"
          inputProps={{
            placeholder: "city",
            type: "text",
            name: "city",
            id: "city",
            list: "cities",
            value: cityInput,
            onChange: (e) => setCityInput(e.target.value),
          }}
        />
        <TextInput
          labelText="Email"
          inputProps={{
            placeholder: "email",
            type: "text",
            name: "email",
            id: "email",
            value: emailInput,
            onChange: (e) => setEmailInput(e.target.value),
          }}
        />
        <PhoneInput phoneInput={phoneInput} setPhoneInput={setPhoneInput} />
        <TextInput
          labelText=""
          inputProps={{
            type: "submit",
            placeholder: "Submit",
            value: "Submit",
          }}
        />
      </form>
    </div>
  );
};
