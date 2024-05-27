import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TUser } from "../../types";
import { Requests } from "../../api";
import toast from "react-hot-toast";

type TUserProvider = {
  allUsers: TUser[];
  isLoading: boolean;
  registerNewUser: (body: Omit<TUser, "id">) => Promise<string | void>;
  patchUserAdminRole: (body: Partial<TUser>) => Promise<unknown>;
  removeUser: (id: number) => Promise<unknown>;
};

const UserContext = createContext({} as TUserProvider);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    return Requests.getAllUsers()
      .then(setAllUsers)
      .then(() => {
        toast.success("data successfully retrieved");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerNewUser = (body: Omit<TUser, "id">) => {
    setIsLoading(true);
    return Requests.registerNewUser(body)
      .then(refetchData)
      .then(() => {
        toast.success("Registered new user successfully");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const patchUserAdminRole = (body: Partial<TUser>) => {
    setIsLoading(true);
    return Requests.patchUserAdminRole(body)
      .then(refetchData)
      .then(() => toast.success(`successfully patched user ${body.id}`))
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeUser = (id: number) => {
    setIsLoading(true);
    return Requests.removeUser(id)
      .then(refetchData)
      .then(() => toast.success(`Successfully removed user ${id}`))
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        allUsers,
        isLoading,
        patchUserAdminRole,
        registerNewUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
