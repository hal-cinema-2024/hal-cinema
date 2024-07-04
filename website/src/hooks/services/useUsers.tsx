import { useEffect, useState } from "react";
import { getUsers } from "../../../../fe-api/repositories/user";
import { UserInterface } from "../../../../fe-api/interfaces/user";

export const useUsers = (page_id: string, page_size: string) => {
  const [users, setUsers] = useState<UserInterface[]>();

  const fetchData = async (page_id?: string, page_size?: string) => {
    try {
      if (!page_id || !page_size) {
        throw new Error("page_id and page_size are required");
      }
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
