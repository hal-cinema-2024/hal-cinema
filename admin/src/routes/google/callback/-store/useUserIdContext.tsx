import { ReactNode, createContext, useState, FC } from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (userId: string) => void;
}

export const UserIdContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserIdProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <UserIdContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </UserIdContext.Provider>
  );
};
