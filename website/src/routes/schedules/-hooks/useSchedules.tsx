import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { GetSchedulesResponseInterface } from "../../../../../fe-api/interfaces/schedule";

export const useSchedules = (startDate: string, movieId: string) => {
  const [schedules, setSchedules] = useState<GetSchedulesResponseInterface>();

  const fetchData = async (startDate: string, movieId: string) => {
    try {
      const res = await getSchedules(startDate, movieId);

      if (res) {
        setSchedules(res!);
      }
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(startDate, movieId);
  }, [startDate, movieId]);

  return { schedules, setSchedules };
};
