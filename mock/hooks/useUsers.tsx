import { useEffect, useState } from "react";
import { UserMock } from "../types/user";
import { apiGet } from "../../util/apiClient";
export const useUsers = (pageId?: string, pageSize?: string) => {
  const [users, setUsers] = useState<UserMock[]>([]);

  const fetchData = async (pageId?: string, pageSize?: string) => {
    try {
      const url = "http://localhost:8014/users";
      const res = await apiGet(url + `?pageId=${pageId}&pageSize=${pageSize}`);
      setUsers(res);
    } catch (error) {
      console.error("user service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize);
  }, [pageId, pageSize]);

  return { users, setUsers };
};
