import { client } from "../utils/aspida";

import {
  CreateScheduleRequestBodyInterface,
  CreateScheduleResponseInterface,
  GetSchedulesResponseInterface,
  UpdateScheduleRequestBodyInterface,
  UpdateScheduleResponseInterface,
} from "../interfaces/schedule";

export const getSchedules = async (startDate: string, movieId: string) => {
  try {
    if (!startDate || !movieId) {
      throw new Error("startDate and movieId are required");
    }
    const res: GetSchedulesResponseInterface = await client.v1.schedules.$get({
      query: {
        startDate: startDate,
        movieId: movieId,
      },
    });

    return res.schedule;
  } catch (err) {
    console.log(err);
  }
};

export const createSchedule = async (
  requestBody: CreateScheduleRequestBodyInterface
) => {
  try {
    if (!requestBody) {
      throw new Error("requestBody is required");
    }
    const res: CreateScheduleResponseInterface =
      await client.v1.schedules.$post({
        body: requestBody,
      });
    return res.scheduleId;
  } catch (err) {
    console.log(err);
  }
};

export const updateSchedule = async (
  scheduleId: string,
  requestBody: UpdateScheduleRequestBodyInterface
) => {
  try {
    if (!scheduleId || !requestBody) {
      throw new Error("scheduleId and requestBody are required");
    }
    const res: UpdateScheduleResponseInterface = await client.v1.schedules
      ._scheduleId(scheduleId)
      .$put({
        body: requestBody,
      });
    return res.scheduleId;
  } catch (err) {
    console.log(err);
  }
};
