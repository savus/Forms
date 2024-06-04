import { ReactNode, createContext, useContext, useState } from "react";
import { TUser } from "../../types";

type TAuthProvider = {
  user: TUser | null;
  setUser: (user: TUser) => void;
};

const AuthContext = createContext({} as TAuthProvider);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
