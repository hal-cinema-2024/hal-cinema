import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { GetSchedulesResponseInterface } from "../../../../../fe-api/interfaces/schedule";

export const useSchedules = (pageId: string, pageSize: string) => {
  const [schedules, setSchedules] = useState<GetSchedulesResponseInterface>();
  const fetchData = async (startDate: string, movieId: string) => {
    try {
      const res = await getSchedules(startDate, movieId);

      setSchedules(res!);
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize);
  }, []);

  return { schedules, setSchedules };
};
