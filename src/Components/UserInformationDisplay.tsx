import "../css/user-information-display.css";
import { useAuth } from "./Providers/AuthProvider";
import { useUserProvider } from "./Providers/UserProvider";
import { UserComponent } from "./UserComponent";

export const UserInformationDisplay = () => {
  const { user } = useAuth();
  const { allUsers } = useUserProvider();
  return (
    <section className="user-information-display container container-lg">
      <div>
        <div className="section-header">User Information</div>
        {!user ? (
          <div>No Information given</div>
        ) : (
          <div>
            <div>Username: {user?.username}</div>
            <div>Password: {user?.password}</div>
            <div>Email: {user?.email}</div>
            <div>City: {user?.city}</div>
            <div>Phone #: {user?.phoneNumber}</div>
          </div>
        )}
      </div>
      <div className="registered-user-list">
        {allUsers.map((user) => (
          <UserComponent user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
};
