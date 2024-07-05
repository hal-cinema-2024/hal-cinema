import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { transformData } from "../-utils/TransSchedule";
import { TransformedData } from "../-types/TransFormData";

export const useSchedules = (startDate: string, movieId: string) => {
  const [schedules, setSchedules] = useState<TransformedData[]>();

  const fetchData = async (startDate: string, movieId: string) => {
    try {
      const res = await getSchedules(startDate, movieId);

      if (res) {
        const transform = transformData(res);
        setSchedules(transform);
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
