import { useEffect, useState } from "react";
import { ScheduleMock } from "../types/schedule";

export const useSchedule = (movieId: string) => {
  const [schedules, setSchedules] = useState<ScheduleMock[]>([]);

  const fetchData = async (movieId?: string) => {
    try {
      const url = "http://localhost:8080/schedules";
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
