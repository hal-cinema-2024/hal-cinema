import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";

export const useOrders = (userId: string) => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async (userId?: string) => {
    try {
      const url = "http://localhost:8080/orders";
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
