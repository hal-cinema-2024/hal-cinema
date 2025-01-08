import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useOrders = (userId: string) => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async () => {
    try {
      const url = "http://localhost:8012/orders";
      const res = await apiGet(url);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return { orders, setOrders };
};
