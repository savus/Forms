import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TUser } from "../../types";
import { UserProvider } from "./UserProvider";
import { Requests } from "../../api";

type TAuthProvider = {
  user: Partial<TUser> | null;
  setUser: (user: Partial<TUser | null>) => void;
  logout: () => void;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<unknown>;
};

const AuthContext = createContext({} as TAuthProvider);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Partial<TUser | null>>(null);

  const getUserFromServer = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return Requests.getAllUsers()
      .then((users) =>
        users.find(
          (user) => user.username === username || user.password === password
        )
      )
      .then((user) => {
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      });
  };

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const user = await getUserFromServer({ username, password });
    if (user.username !== username) {
      throw new Error("Username incorrect");
    }

    if (user.password !== password) {
      throw new Error("Password incorrect");
    }

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => setUser(null);

  useEffect(() => {
    const maybeUser = localStorage.getItem("user");
    if (maybeUser) {
      setUser(JSON.parse(maybeUser));
    }
  }, []);
  return (
    <UserProvider>
      <AuthContext.Provider value={{ user, setUser, logout, login }}>
        {children}
      </AuthContext.Provider>
    </UserProvider>
  );
};

export const useAuth = () => useContext(AuthContext);
