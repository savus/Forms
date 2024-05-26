import { TModalActiveState } from "../types";
import { useMenus } from "./Providers/MenuProvider";
import { TextInput } from "./TextInput";

export const ModalComponent = ({
  dataName,
  stateToCheck,
}: {
  dataName: string;
  stateToCheck: TModalActiveState;
}) => {
  const { modalActiveState, setModalActiveState } = useMenus();
  const checkIfStateIsActive = (stateToCheck: TModalActiveState) =>
    stateToCheck === modalActiveState ? "active" : "";
  return (
    <div
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
