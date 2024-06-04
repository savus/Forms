import { useAuth } from "./Providers/AuthProvider";

export const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <button
      className="logout-button"
      onClick={(e) => {
        e.preventDefault();
        logout();
      }}
    >
      Logout
    </button>
  );
};
