import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useOrderById = (id: string) => {
  const [order, setOrder] = useState<OrdersMock>();

  const fetchData = async (id: string) => {
    try {
      const url = "http://localhost:8012/orders/";
      const res = await apiGet(url + id);

      setOrder(res);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return { order, setOrder };
};
