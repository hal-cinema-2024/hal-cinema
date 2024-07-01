import { useEffect, useState } from "react";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";
import { transformData } from "../-utils/TransSchedule";
import { TransformedData } from "../-types/TransFormData";

export const useSchedules = (
  pageId: string,
  pageSize: string,
  date: string
) => {
  const [schedules, setSchedules] = useState<TransformedData[]>();

  const fetchData = async (pageId: string, pageSize: string, date: string) => {
    try {
      const res = await getSchedules(
        pageId,
        pageSize,
        date ? new Date(date).toISOString() : undefined
      );
      if (res) {
        const transform = transformData(res);
        setSchedules(transform);
      }
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize, date);
  }, [pageId, pageSize, date]);

  return { schedules, setSchedules };
};
