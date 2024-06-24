import { useEffect, useState } from "react";
import { getUser } from "../../../../../fe-api/repositories/user";
import { GetUserResponseInterface } from "../../../../../fe-api/interfaces/user";

export const useUser = (userId: string) => {
  const [user, setUser] = useState<GetUserResponseInterface>();

  const fetchData = async (userId: string) => {
    try {
      const res = await getUser(userId);
      if (res) setUser(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, []);
  return { user, setUser };
};
