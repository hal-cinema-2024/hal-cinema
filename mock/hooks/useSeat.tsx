import { useEffect, useState } from "react";
import { OrdersDetail, OrdersMock } from "../types/orders";
import { apiGet } from "../../util/apiClient";

export const useSeat = (userId: string) => {
  const [seat, setSeat] = useState<OrdersMock[]>([]);

  const fetchData = async (userId?: string) => {
    try {
      const url = "http://localhost:8012/orders";
      const res = await apiGet(url);
      const data = await res.json();

      const SeatData = data.map((item: OrdersMock) => {
        if (!item.orderDetail) return;
        item.orderDetail.map((item: OrdersDetail) => {
          return item.seatName;
        });
      });
      setSeat(SeatData);
    } catch (error) {
      console.error("order service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return { seat, setSeat };
};
