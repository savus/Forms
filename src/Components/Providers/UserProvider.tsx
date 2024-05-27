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

type TUserProvider = { allUsers: TUser[] };

const UserContext = createContext({} as TUserProvider);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () =>
    Requests.getAllUsers()
      .then((data) => {
        setIsLoading(true);
        setAllUsers(data);
      })
      .then(() => {
        toast.success("data successfully retrieved");
      })
      .catch((e) => toast.error(e))
      .finally(() => {
        setIsLoading(false);
      });

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <UserContext.Provider value={{ allUsers }}>{children}</UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
