import { useEffect, useState } from "react";
import { UserMock } from "../types/user";

export const useUser = (userId: number) => {
  const [user, setUser] = useState<UserMock[]>([]);

  const fetchData = async (userId?: number) => {
    try {
      const url = "";
      const res = await fetch(url + `?userId=${userId}`);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { user, setUser };
};
