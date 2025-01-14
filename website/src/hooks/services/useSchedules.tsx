import { useState, useEffect } from "react";
import { getSchedules } from "../../../../fe-api/repositories/schedule";
import { useScheduleId } from "../../routes/schedules/-hooks/useScheduleId";
import { TransformedData } from "../../routes/schedules/-types/TransFormData";
import { get7Days } from "../../routes/schedules/-utils/getDate";
import { TransDate } from "../../routes/schedules/-utils/TransDate";
import { transformData } from "../../routes/schedules/-utils/TransSchedule";

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

      if (res && res.schedules) {
        const data = await transformData(res.schedules);
        console.log(data);
        await setSchedules(data);
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
