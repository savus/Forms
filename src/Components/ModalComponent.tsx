import { useState } from "react";
import { TModalActiveState, TPhoneInput } from "../types";
import { useMenus } from "./Providers/MenuProvider";
import { TextInput } from "./TextInput";
import { PhoneInput } from "./PhoneInput";
import { ErrorMessage } from "./ErrorMessage";
import { isCityValid, isTextInputValidLength } from "../validations";
import { allCities } from "../utilities/all-cities";
import { useUserProvider } from "./Providers/UserProvider";
import toast from "react-hot-toast";

const usernameErrorMessage = "Username must be more than 2 characters";
const passwordErrorMessage = "Password must be more than 2 characters";
const cityErrorMessage = "Must be valid city";

export const ModalComponent = ({
  dataName,
  stateToCheck,
}: {
  dataName: string;
  stateToCheck: TModalActiveState;
}) => {
  const { modalActiveState, setModalActiveState } = useMenus();

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<TPhoneInput>(["", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const usernameIsValid = isTextInputValidLength(usernameInput);
  const passwordIsValid = isTextInputValidLength(passwordInput);
  const cityIsValid = isCityValid(allCities, cityInput);

  const showUsernameError = isSubmitted && !usernameIsValid;
  const showPasswordError = isSubmitted && !passwordIsValid;
  const showCityError = isSubmitted && !cityIsValid;

  const doBadInputsExist = !usernameIsValid || !passwordIsValid || !cityIsValid;

  const { registerNewUser } = useUserProvider();

  const checkIfStateIsActive = (stateToCheck: TModalActiveState) =>
    stateToCheck === modalActiveState ? "active" : "";

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
        setIsSubmitted(true);
        setModalActiveState("none");
        if (!doBadInputsExist) {
          registerNewUser({
            username: usernameInput,
            password: passwordInput,
            email: emailInput,
            isAdmin: false,
            city: cityInput,
            phoneNumber: phoneInput.join("-"),
          })
            .catch((e) => {
              toast.error(e);
            })
            .finally(resetValues);
        }
      }}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.matches("[data-modal]")) setModalActiveState("none");
      }}
      className={`${dataName}-modal ${checkIfStateIsActive(stateToCheck)} `}
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
        <ErrorMessage show={showUsernameError} message={usernameErrorMessage} />
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
        <ErrorMessage show={showPasswordError} message={passwordErrorMessage} />

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
        <ErrorMessage show={showCityError} message={cityErrorMessage} />

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
