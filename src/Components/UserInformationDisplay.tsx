import "../css/user-information-display.css";
import { LoginForm } from "./LoginForm";
import { useAuth } from "./Providers/AuthProvider";
import { useAllUsers } from "./Providers/UserProvider";
import { UserComponent } from "./UserComponent";

export const UserInformationDisplay = () => {
  const { allUsers } = useAllUsers();
  const { user } = useAuth();
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
          </div>
        )}
        <LoginForm />
      </div>
      <div className="registered-user-list">
        {allUsers.map((user) => (
          <UserComponent user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
};
