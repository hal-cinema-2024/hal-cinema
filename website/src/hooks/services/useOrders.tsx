import { useEffect, useState } from "react";
import { getOrders } from "../../../../fe-api/repositories/order";
import { OrdersInterface } from "../../../../fe-api/interfaces/order";

export const useOrders = (userId: string) => {
  const [orders, setOrders] = useState<OrdersInterface[]>();

  const fetchData = async (userId: string) => {
    try {
      if (!userId) {
        throw new Error("userId is required");
      }
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
