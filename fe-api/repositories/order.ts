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
    if (!userId) {
      throw new Error("userId is required");
    }
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
    if (!orderId) {
      throw new Error("orderId is required");
    }
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
    if (!requestBody) {
      throw new Error("requestBody is required");
    }
    const res: CreateOrderResponseInterface = await client.v1.orders.$post({
      body: requestBody,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrder = async (orderId: string) => {
  try {
    if (!orderId) {
      throw new Error("orderId is required");
    }
    const res: DeleteOrderResponseInterface = await client.v1.orders
      ._orderId(orderId)
      .$delete();
    return res.orderId;
  } catch (err) {
    console.log(err);
  }
};
