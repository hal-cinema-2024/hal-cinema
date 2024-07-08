import { useState, useEffect } from "react";
import { getSchedules } from "../../../../fe-api/repositories/schedule";
import { useScheduleId } from "../../routes/movies/$movieId/schedules/-hooks/useScheduleId";
import { TransformedData } from "../../routes/movies/$movieId/schedules/-types/TransFormData";
import { get7Days } from "../../routes/movies/$movieId/schedules/-utils/getDate";
import { TransDate } from "../../routes/movies/$movieId/schedules/-utils/TransDate";
import { transformData } from "../../routes/movies/$movieId/schedules/-utils/TransSchedule";

export const useSchedules = (movieId?: string) => {
  const [schedules, setSchedules] = useState<TransformedData[]>();
  const { scheduleId } = useScheduleId();

  const selectDate = (scheduleId: number) => {
    const date = get7Days();
    const select = date[scheduleId];
    const startDate = TransDate(select);
    return startDate;
  };

  const startDate = selectDate(scheduleId);
  const fetchData = async (startDate: string, movieId?: string) => {
    try {
      const res = await getSchedules(startDate, movieId);

      if (res) {
        const data = await transformData(res.schedule!);
        await setSchedules(data!);
      }
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(startDate, movieId!);
  }, []);

  return { schedules, setSchedules };
};
