import { useMenus } from "./Providers/MenuProvider";
import { TextInput } from "./TextInput";

export const ModalComponent = ({ dataName }: { dataName: string }) => {
  const { modalActiveState, setModalActiveState } = useMenus();
  const checkIfStateIsActive = (stateToCheck: string) =>
    stateToCheck === modalActiveState ? "active" : "";
  return (
    <div
      onClick={() => {
        setModalActiveState("none");
      }}
      className={`${dataName}-modal ${checkIfStateIsActive(
        "registration-form"
      )}`}
      data-modal={dataName}
    >
      <form action="#" className="registration-form modal-body">
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
      </form>
    </div>
  );
};
