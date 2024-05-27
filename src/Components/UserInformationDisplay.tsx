import { useUserInformationHandler } from "./Providers/UserInformationProvider";
import { useUsers } from "./Providers/UserProvider";
import "../css/user-information-display.css";
import { UserComponent } from "./UserComponent";

export const UserInformationDisplay = () => {
  const { userInformation } = useUserInformationHandler();
  const { allUsers } = useUsers();
  return (
    <section className="user-information-display container container-lg">
      <div>
        <div className="section-header">User Information</div>
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
      <div className="registered-user-list">
        {allUsers.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};
