import { client } from "../../utils/aspida";

import {
  CreateScheduleRequestBodyInterface,
  CreateScheduleResponseInterface,
  GetSchedulesResponseInterface,
  UpdateScheduleRequestBodyInterface,
  UpdateScheduleResponseInterface,
} from "../interfaces/schedule";

export const getSchedules = async (
  pageId?: string,
  pageSize?: string,
  date?: string
) => {
  try {
    const res: GetSchedulesResponseInterface = await client.v1.schedules.$get({
      query: {
        pageId: pageId,
        pageSize: pageSize,
        date: date,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createSchedule = async (
  requestBody: CreateScheduleRequestBodyInterface
) => {
  try {
    const res: CreateScheduleResponseInterface =
      await client.v1.schedules.$post({
        body: requestBody,
      });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateSchedule = async (
  scheduleId: string,
  requestBody: UpdateScheduleRequestBodyInterface
) => {
  try {
    const res: UpdateScheduleResponseInterface = await client.v1.schedules
      ._scheduleId(scheduleId)
      .$put({
        body: requestBody,
      });
    return res;
  } catch (err) {
    console.log(err);
  }
};
