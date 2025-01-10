import { useEffect, useState } from "react";
import { OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useOrderBySchedule = (scheduleId: string) => {
  const [orderBySchedule, setOrderBySchedule] = useState<OrdersMock[]>([]);

  const fetchData = async (scheduleId?: string) => {
    try {
      const url = "http://localhost:8012/orders";
      const customUrl = url + `?scheduleId=${scheduleId}`;
      const res = await apiGet(customUrl);
      setOrderBySchedule(res);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(scheduleId);
  }, [scheduleId]);

  return { orderBySchedule, setOrderBySchedule };
};
