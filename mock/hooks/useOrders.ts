import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrdersMock[]>([]);

  const fetchData = async () => {
    try {
      const url = "http://localhost:8012/orders";
      const res = await apiGet(url);

      setOrders(res);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { orders, setOrders };
};
