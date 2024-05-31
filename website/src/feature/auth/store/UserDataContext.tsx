import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
