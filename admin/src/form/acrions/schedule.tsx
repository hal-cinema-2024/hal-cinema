import { CreateSchedule } from "../../../../mock/types/schedule";
import { apiDelete, apiPost } from "../../../../util/apiClient";

export const createSchedule = async (data: CreateSchedule) => {
  try {
    const url = "http://localhost:8013/schedules";
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const deleteSchedule = async (scheduleId: number) => {
  try {
    const url = "http://localhost:8013/schedules";

    const res = await apiDelete(url + `/${scheduleId}`);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};
