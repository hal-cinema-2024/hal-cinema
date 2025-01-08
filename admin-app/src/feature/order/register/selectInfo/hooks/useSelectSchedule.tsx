import { useState, useEffect } from "react";

export const useSelectSchedule = () => {
  const [selectedScheduleId, setSelectedScheduleId] = useState<number>(1);
  useEffect(() => {
    setSelectedScheduleId(selectedScheduleId);
  }, [selectedScheduleId]);

  const handleSelectSchedule = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedScheduleId(Number(e.target.value));
  };
  return {
    selectedScheduleId,
    handleSelectSchedule,
  };
};
