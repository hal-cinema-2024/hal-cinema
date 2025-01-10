import { CreateOrder, UpdateOrder } from "../../../../mock/types/orders";
import { apiDelete, apiGet, apiPost, apiPut } from "../../../../util/apiClient";

export const url = "http://localhost:8012/orders";

export const createOrder = async (data: CreateOrder) => {
  try {
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("Order service error: " + error);
  }
};

export const getOrders = async () => {
  try {
    const res = await apiGet(url);
    return res;
  } catch (error) {
    console.error("Order service error: " + error);
  }
};

export const getOrder = async (OrderId: number) => {
  try {
    const res = await apiGet(url + `/${OrderId}`);
    return res;
  } catch (error) {
    console.error("Order service error: " + error);
  }
};

export const updateOrder = async (OrderId: string, data: UpdateOrder) => {
  try {
    const res = await apiPut(url + `/${OrderId}`, data);
    return res;
  } catch (error) {
    console.error("Order service error: " + error);
  }
};

export const deleteOrder = async (OrderId: string) => {
  try {
    const res = await apiDelete(url + `/${OrderId}`);
    return res;
  } catch (error) {
    console.error("Order service error: " + error);
  }
};
