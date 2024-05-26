import { TModalActiveState } from "../types";
import { useMenus } from "./Providers/MenuProvider";

export const ModalLink = ({
  linkText,
  stateToSet,
  dataModalLink,
}: {
  linkText: string;
  stateToSet: TModalActiveState;
  dataModalLink: string;
}) => {
  const { setModalActiveState, setDropdownMenuState } = useMenus();
  return (
    <div
      onClick={() => {
        setModalActiveState(stateToSet);
        setDropdownMenuState("none");
      }}
      className="modal-link"
      data-modal-link={dataModalLink}
    >
      {linkText}
    </div>
  );
};
