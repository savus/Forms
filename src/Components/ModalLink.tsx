import { useMenus } from "./Providers/MenuProvider";

export const ModalLink = ({ linkText }: { linkText: string }) => {
  const { setModalActiveState } = useMenus();
  return (
    <div
      onClick={() => setModalActiveState("registration-form")}
      className="modal-link"
      data-modal-link="registration"
    >
      {linkText}
    </div>
  );
};
