import { useEffect, useState } from "react";
import { GetSchedulesResponseInterface } from "../../../../../fe-api/interfaces/schedule";
import { getSchedules } from "../../../../../fe-api/repositories/schedule";

export const useSchedules = (
  pageId?: string,
  pageSize?: string,
  date?: string
) => {
  const [schedules, setSchedules] = useState<GetSchedulesResponseInterface>();
  const fetchData = async (
    pageId?: string,
    pageSize?: string,
    date?: string
  ) => {
    try {
      const res = await getSchedules(
        pageId,
        pageSize,
        date ? new Date(date).toISOString() : undefined
      );
      if (res) setSchedules(res);
    } catch (error) {
      console.error("schedules service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(
      pageId,
      pageSize,
      date ? new Date(date).toISOString() : undefined
    );
  }, []);

  return { schedules, setSchedules };
};
