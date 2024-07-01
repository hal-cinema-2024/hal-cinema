import { ReactNode, createContext, useState, FC } from "react";
import { UserInterface } from "../../../fe-api/interfaces/user";

interface UserContextType {
  user: UserInterface | undefined;
  setUser: (user: UserInterface | undefined) => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInterface | undefined>();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
