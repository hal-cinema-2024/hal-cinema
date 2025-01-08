import { NativeSelect } from "@yamada-ui/react";
import { useSchedules } from "../../../../../../mock/hooks/useSchedule";
import { useSelectSchedule } from "./hooks/useSelectSchedule";
import { ScheduleMock } from "../../../../../../mock/types/schedule";

export const SelectSchedule = () => {
  const { schedules } = useSchedules();
  const { selectedScheduleId, handleSelectSchedule } = useSelectSchedule();
  return (
    <>
      <NativeSelect
        name='movieId'
        value={selectedScheduleId}
        onChange={handleSelectSchedule}
      >
        {schedules.map((schedule: ScheduleMock) => (
          <option key={schedule.id} value={schedule.id}>
            {schedule.movieName}
          </option>
        ))}
      </NativeSelect>
    </>
  );
};
