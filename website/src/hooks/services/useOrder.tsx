import { useEffect, useState } from "react";
import { getOrder } from "../../../../fe-api/repositories/order";
import { OrdersInterface } from "../../../../fe-api/interfaces/order";

export const useOrder = (orderId: string) => {
  const [order, setOrder] = useState<OrdersInterface>();

  const fetchData = async (orderId: string) => {
    try {
      const res = await getOrder(orderId);
      if (res) setOrder(res);
    } catch (error) {
      console.error("orders service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(orderId);
  }, [orderId]);

  return { order, setOrder };
};
