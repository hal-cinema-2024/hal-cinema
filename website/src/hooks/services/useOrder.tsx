import { useEffect, useState } from "react";
import { GetOrderResponseInterface } from "../../api/interfaces/order";
import { getOrder } from "../../api/repositories/order";

export const useOrder = (orderId: string) => {
  const [order, setOrder] = useState<GetOrderResponseInterface>();

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
  }, []);

  return { order, setOrder };
};
