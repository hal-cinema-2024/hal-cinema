import { AddSchedulesModal } from "../components/modal/AddSchedulesModal";
import { ScheduleTable } from "../data-table/ScheduleTable";

export const Schedules = () => {
  return (
    <>
      <AddSchedulesModal />
      <ScheduleTable />
    </>
  );
};
