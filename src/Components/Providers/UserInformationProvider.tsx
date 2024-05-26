import { ReactNode, createContext, useContext, useState } from "react";
import { TUserInformation } from "../../types";

type TUserInformationHandler = {
  userInformation: TUserInformation | null;
  setUserInformation: (userInformation: TUserInformation) => void;
};

const UserInformationContext = createContext({} as TUserInformationHandler);

export const UserInformationHandler = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userInformation, setUserInformation] =
    useState<TUserInformation | null>(null);
  return (
    <UserInformationContext.Provider
      value={{ userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

export const useUserInformationHandler = () =>
  useContext(UserInformationContext);
