import { useEffect, useState } from "react";
import { V1User } from "../../../../api/@types";
import { getUser } from "../../../../fe-api/repositories/user";

export const useUser = (user_id: string) => {
  const [user, setUser] = useState<V1User>();

  const fetchData = async (user_id: string) => {
    try {
      const res = await getUser(user_id);
      if (res) setUser(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(user_id);
  }, []);
  return { user, setUser };
};
