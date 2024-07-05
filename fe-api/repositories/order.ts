import { client } from "../utils/aspida";

import {
  CreateOrderRequestBodyInterface,
  CreateOrderResponseInterface,
  DeleteOrderResponseInterface,
  GetOrderResponseInterface,
  GetOrdersResponseInterface,
} from "../interfaces/order";

export const getOrders = async (userId: string) => {
  try {
    const res: GetOrdersResponseInterface = await client.v1.orders.$get({
      query: { userId },
    });
    return res.order;
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const res: GetOrderResponseInterface = await client.v1.orders
      ._orderId(orderId)
      .$get();
    return res.order;
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (
  requestBody: CreateOrderRequestBodyInterface
) => {
  try {
    const res: CreateOrderResponseInterface = await client.v1.orders.$post({
      body: requestBody,
    });
    return res.orderId;
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrder = async (orderId: string) => {
  try {
    const res: DeleteOrderResponseInterface = await client.v1.orders
      ._orderId(orderId)
      .$delete();
    return res.orderId;
  } catch (err) {
    console.log(err);
  }
};
