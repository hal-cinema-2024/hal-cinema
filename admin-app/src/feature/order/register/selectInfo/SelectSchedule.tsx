import { NativeSelect } from "@yamada-ui/react";
import { MoviesMock } from "../../../../../../mock/types/movies";
import { useState, useEffect } from "react";
import { useSchedules } from "../../../../../../mock/hooks/useSchedule";

export const SelectSchedule = () => {
  const { schedules } = useSchedules();
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>("");
  useEffect(() => {
    setSelectedScheduleId(selectedScheduleId);
  }, [selectedScheduleId]);
  return (
    <>
      <NativeSelect
        name='movieId'
        value={selectedScheduleId}
        onChange={(e) => setSelectedScheduleId(e.target.value)}
      >
        {schedules.map((schedule: MoviesMock) => (
          <option key={schedule.id} value={schedule.id}>
            {schedule.movieName}
          </option>
        ))}
      </NativeSelect>
    </>
  );
};
