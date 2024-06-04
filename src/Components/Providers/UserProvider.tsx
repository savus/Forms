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
  setAllUsers: (users: TUser[]) => void;
  isLoading: boolean;
  setIsLoading: (loadingState: boolean) => void;
  registerNewUser: (body: Omit<TUser, "id">) => Promise<unknown>;
  removeUser: (id: number) => Promise<unknown>;
  updateAdminRole: (body: Partial<TUser>) => Promise<unknown>;
};

const UserContext = createContext({} as TUserProvider);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    return Requests.getAllUsers()
      .then(setAllUsers)
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeUser = (id: number) => {
    setIsLoading(true);
    return Requests.removeUser(id)
      .then(refetchData)
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateAdminRole = (body: Partial<TUser>) => {
    setIsLoading(true);
    return Requests.patchUser(body)
      .then(refetchData)
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerNewUser = (body: Omit<TUser, "id">) => {
    setIsLoading(false);
    return Requests.postNewUser(body)
      .then(refetchData)
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
        setAllUsers,
        isLoading,
        setIsLoading,
        registerNewUser,
        updateAdminRole,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAllUsers = () => useContext(UserContext);
