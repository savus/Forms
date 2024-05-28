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
  setAllUsers: (allUsers: TUser[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  toggleAdminRole: (body: Partial<TUser>) => Promise<unknown>;
  removeUser: (id: number) => Promise<unknown>;
  registerNewUser: (body: Omit<TUser, "id">) => Promise<unknown>;
  toggleAdminRoleOpt: (body: Partial<TUser>) => Promise<unknown>;
  removeUserOpt: (id: number) => Promise<unknown>;
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
        toast.success("Data successfully fetched");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleAdminRole = (body: Partial<TUser>) => {
    setIsLoading(true);
    return Requests.patchUserAdminRole(body)
      .then(refetchData)
      .then(() => {
        toast.success("Patched successfully");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleAdminRoleOpt = (body: Partial<TUser>) => {
    setAllUsers(
      allUsers.map((user) =>
        user.id === body.id ? { ...user, ...body } : user
      )
    );

    return Requests.patchUserAdminRole(body).catch((e) => {
      toast.error(e);
      setAllUsers(allUsers);
    });
  };

  const removeUser = (id: number) => {
    setIsLoading(true);
    return Requests.removeUser(id)
      .then(refetchData)
      .then(() => {
        toast.success("Successfully removed user");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeUserOpt = (id: number) => {
    setAllUsers(allUsers.filter((user) => user.id != id));

    return Requests.removeUser(id).catch((e) => {
      toast.error(e);
      setAllUsers(allUsers);
    });
  };

  const registerNewUser = (body: Omit<TUser, "id">) => {
    setIsLoading(true);
    return Requests.registerNewUser(body)
      .then(refetchData)
      .then(() => {
        toast.success("Successfully registered user");
      })
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
        toggleAdminRole,
        removeUser,
        registerNewUser,
        removeUserOpt,
        toggleAdminRoleOpt,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserContext);
