import { client } from "../../utils/aspida";
import {
  GetOrderResponseInterface,
  GetOrdersResponseInterface,
} from "../interfaces/order";

export const getOrders = async (userId?: string) => {
  try {
    const res: GetOrdersResponseInterface = await client.v1.orders.$get({
      query: { userId },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const res: GetOrderResponseInterface = await client.v1.orders
      ._orderId(orderId)
      .$get();
    return res;
  } catch (err) {
    console.log(err);
  }
};
