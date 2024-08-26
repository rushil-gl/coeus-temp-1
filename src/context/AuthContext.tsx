import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import { ILoginResponse } from "../types/user.types";

interface IAuthContextProps {
  user: ILoginResponse | null;
  setUser: Dispatch<SetStateAction<ILoginResponse | null>>
}

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<ILoginResponse | null>(JSON.parse(localStorage.getItem("user") || "{}"));
  alert(JSON.stringify(user + "========"));

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
