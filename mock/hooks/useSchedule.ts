import { useEffect, useState } from "react";
import { ScheduleMock } from "../types/schedule";

export const useSchedules = (movieId: number) => {
  const [schedules, setSchedules] = useState<ScheduleMock[]>([]);

  const fetchData = async (movieId?: number) => {
    try {
      const url = `http://localhost:8013/schedules?movieId=${movieId}`;
      const res = await fetch(url + `?movieId=${movieId}`);
      const data = await res.json();
      setSchedules(data);
    } catch (error) {
      console.error("schedule service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  return { schedules, setSchedules };
};
