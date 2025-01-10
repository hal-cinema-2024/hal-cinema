export interface OrdersDetail {
  seatName?: string;
  priceType?: number;
  price?: number;
}
export interface OrdersMock {
  id?: string;
  userId?: string;
  scheduleId?: string;
  movieName?: string;
  theater?: string;
  orderDetail?: OrdersDetail[];
}

export type CreateOrder = Partial<OrdersMock>;
export type UpdateOrder = Partial<OrdersMock>;
