import { useUserInformationHandler } from "./Providers/UserInformationProvider";

export const UserInformationDisplay = () => {
  const { userInformation } = useUserInformationHandler();
  return (
    <div>
      {!userInformation ? (
        <div>No Information given</div>
      ) : (
        <div>
          <div>Username: {userInformation?.username}</div>
          <div>Password: {userInformation?.password}</div>
          <div>Email: {userInformation?.email}</div>
          <div>City: {userInformation?.city}</div>
          <div>Phone #: {userInformation?.phoneInput}</div>
        </div>
      )}
    </div>
  );
};
