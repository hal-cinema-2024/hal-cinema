import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { TransformedData } from "../-types/TransFormData";
import { transformData } from "../-utils/TransSchedule";
import { useScheduleId } from "./useScheduleId";
import { get7Days } from "../-utils/getDate";
import { TransDate } from "../-utils/TransDate";

export const useSchedules = (movieId?: string) => {
  const [schedules, setSchedules] = useState<TransformedData[]>();
  const { scheduleId } = useScheduleId();

  const selectDate = (scheduleId: number) => {
    const date = get7Days();
    const select = date[scheduleId];
    return TransDate(select);
  };

  const startDate = selectDate(scheduleId);
  const fetchData = async (startDate: string, movieId?: string) => {
    try {
      const res = await getSchedules(startDate, movieId);

      if (res) {
        const data = transformData(res.schedule!);
        setSchedules(data!);
      }
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(startDate, movieId!);
  }, [scheduleId]);

  return { schedules, setSchedules };
};
