import { useEffect, useState } from "react";
import { getOrders } from "../../../../fe-api/repositories/order";
import { V1Orders } from "../../../../api/@types";

export const useOrders = (userId?: string) => {
  const [orders, setOrders] = useState<V1Orders[]>();

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
