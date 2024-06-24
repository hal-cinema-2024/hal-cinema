import { useEffect, useState } from "react";
import { GetOrdersResponseInterface } from "../../api/interfaces/order";
import { getOrders } from "../../api/repositories/order";

export const useOrders = (userId?: string) => {
  const [orders, setOrders] = useState<GetOrdersResponseInterface>();

  const fetchData = async (userId?: string) => {
    try {
      const res = await getOrders(userId);
      if (res) setOrders(res);
    } catch (error) {
      console.error("orders service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, []);

  return { orders, setOrders };
};
