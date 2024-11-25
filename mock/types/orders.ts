import { V1OrdersDetail } from "../../api/@types";
export interface OrdersDetail {
  seatName?: string;
  priceType?: string;
  price?: number;
}
export interface OrdersMock {
  orderId?: string;
  userId?: string;
  movieName?: string;
  screen?: string;
  orderDetail?: OrdersDetail[];
}
