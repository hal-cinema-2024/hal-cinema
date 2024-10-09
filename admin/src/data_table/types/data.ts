import {
  MovieInterface,
  ScheduleInterface,
  UserInterface,
  OrdersInterface,
} from "../../../../fe-api/interfaces";

export type DataType =
  | MovieInterface // getMovies
  | ScheduleInterface // getSchedules
  | OrdersInterface // getOrders
  | UserInterface; // getUsers

type UserKeys = keyof UserInterface;
type MovieKeys = keyof MovieInterface;
type ScheduleKeys = keyof ScheduleInterface;
type OrdersKeys = keyof OrdersInterface;

export type DataKeys = UserKeys | MovieKeys | ScheduleKeys | OrdersKeys;

const userInstance = {} as UserInterface;
const movieInstance = {} as MovieInterface;
const scheduleInstance = {} as ScheduleInterface;
const ordersInstance = {} as OrdersInterface;

export const DataInstance = {
  User: userInstance,
  Movie: movieInstance,
  Schedule: scheduleInstance,
  Orders: ordersInstance,
};
