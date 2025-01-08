import { AddSchedulesModal } from "../components/modal/AddSchedulesModal";
import { ScheduleTable } from "../feature/data-table/ScheduleTable";

export const Schedules = () => {
  return (
    <>
      <AddSchedulesModal />
      <ScheduleTable />
    </>
  );
};
