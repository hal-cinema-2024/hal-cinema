import { useEffect, useState } from "react";
import { ScheduleMock } from "../types/schedule";

export const useSchedules = (scheduleId: number) => {
  const [schedules, setSchedules] = useState<ScheduleMock[]>([]);

  const fetchData = async (scheduleId?: number) => {
    try {
      const url = import.meta.env.VITE_ORDER_MOCK_URL;
      const res = await fetch(url + `?movieId=${scheduleId}`);
      const data = await res.json();
      setSchedules(data);
    } catch (error) {
      console.error("schedule service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(scheduleId);
  }, [scheduleId]);

  return { schedules, setSchedules };
};
