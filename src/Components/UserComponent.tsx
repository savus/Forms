import { TUser } from "../types";

export const UserComponent = ({
  user: { id, username, password, city, email, phoneNumber, isAdmin },
}: {
  user: TUser;
}) => {
  return (
    <div>
      <div>id: {id}</div>
      <div>username: {username}</div>
      <div>password: {password}</div>
      <div>city: {city}</div>
      <div>email: {email}</div>
      <div>phone number: {phoneNumber}</div>
      <div>Admin: {isAdmin ? "True" : "False"}</div>
      <div className="button-group">
        <button className="toggle-role-button">
          {isAdmin ? "Remove Admin Status" : "Give Admin Status"}
        </button>
        <button className="remove-user-button">Remove User</button>
      </div>
    </div>
  );
};
