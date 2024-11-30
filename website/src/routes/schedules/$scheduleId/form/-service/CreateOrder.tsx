import { FieldValues } from "react-hook-form";
import { useSeatSelection } from "../-hooks/useSeatSelection";
import { useOrderId } from "../../../../../hooks/useOrderId";
import type { CreateOrder } from ".../../../mock/types/orders";
import { apiPost } from "../../../../../../../util/apiClient";

type OrderDetail = {
  seatName: string;
  priceType: number;
  price: number;
};

export type CreateOrderRequest = {
  id: number;
  userId: number;
  movieName: string;
  screen: string;
  orderDetail: OrderDetail[];
};

export const PostOrder = async (req: CreateOrder) => {
  const res = apiPost("/api/orders", req);
  return res;
};
export async function CreateOrderService(data: FieldValues) {
  const { selectedSeats } = useSeatSelection();
  const { setOrderId } = useOrderId();

  const seatSelects: OrderDetail[] = selectedSeats.map((seat) => {
    const priceType = Array.isArray(data)
      ? (data[selectedSeats.indexOf(seat)] as number[])
      : (data as unknown as number);
    const price = priceType === 0 ? 1800 : priceType === 1 ? 1500 : 1200;
    return {
      seatName: `${seat.row}${seat.number}`,
      priceType: priceType as number,
      price: price,
    };
  });

  const req: CreateOrderRequest = {
    id: 1,
    userId: 1,
    movieName: "Example Movie",
    screen: "Screen 1",
    orderDetail: seatSelects,
  };
  const res = await PostOrder(req);
  console.log(res);
  if (res) setOrderId(res.id!);
}
