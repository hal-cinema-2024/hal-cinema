import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { TransformedData } from "../-types/TransFormData";
import { transformData } from "../-utils/TransSchedule";

export const useSchedules = (startDate: string, movieId?: string) => {
  const [schedules, setSchedules] = useState<TransformedData[]>();

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
  }, []);

  return { schedules, setSchedules };
};
