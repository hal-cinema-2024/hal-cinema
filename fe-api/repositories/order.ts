import { client } from "../utils/aspida";

import {
  CreateOrderRequestBodyInterface,
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

export const createOrder = async (
  requestBody: CreateOrderRequestBodyInterface
) => {
  try {
    await client.v1.orders.$post({
      body: requestBody,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrder = async (orderId: string) => {
  try {
    await client.v1.orders._orderId(orderId).$delete();
  } catch (err) {
    console.log(err);
  }
};
