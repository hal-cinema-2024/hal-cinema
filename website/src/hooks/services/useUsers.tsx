import { useEffect, useState } from "react";
import { getUsers } from "../../../../fe-api/repositories/user";
import { V1User } from "../../../../api/@types";

export const useUsers = (page_id?: string, page_size?: string) => {
  const [users, setUsers] = useState<V1User[]>();

  const fetchData = async (page_id?: string, page_size?: string) => {
    try {
      const res = await getUsers(page_id, page_size);
      if (res) setUsers(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(page_id, page_size);
  }, []);
  return { users, setUsers };
};
