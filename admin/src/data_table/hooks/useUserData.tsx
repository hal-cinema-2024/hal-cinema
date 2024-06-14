import { useState, useEffect } from "react";
import { getData } from "../data";
import { User } from "../component/UserColumn";

const useUserData = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await getData());
    };
    fetchData();
  }, []);

  return { data, setData };
};

export default useUserData;
