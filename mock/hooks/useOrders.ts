import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";

export const useOrders = (userId: number) => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async (userId?: number) => {
    try {
      const url = import.meta.env.VITE_USER_MOCK_URL;
      const res = await fetch(url + `?userId=${userId}`);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { orders, setOrders };
};
