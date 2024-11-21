import { useEffect, useState } from "react";
import { UserMock } from "../types/user";

export const useUser = (userId: string) => {
  const [user, setUser] = useState<UserMock | null>(null);

  const fetchData = async (userId?: string) => {
    try {
      const url = "http://localhost:8080/users";
      const res = await fetch(url + `?userId=${userId}`);
      const data = await res.json();
      setUser(data[0]); // Assuming the response is an array
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { user, setUser };
};
