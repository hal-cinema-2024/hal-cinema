import { ReactNode, createContext, useState, FC } from "react";
import { GetUserResponseInterface } from "../../../fe-api/interfaces/user";

interface UserContextType {
  user: GetUserResponseInterface | undefined;
  setUser: (user: GetUserResponseInterface | undefined) => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<GetUserResponseInterface | undefined>();

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
