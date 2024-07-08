import { useContext } from "react";
import { ScheduleContext } from "../-store/ScheduleContext";
export const useScheduleId = () => {
  const context = useContext(ScheduleContext);
  if (context === undefined) {
    throw new Error("useScheduleId must be used within a ScheduleProvider");
  }
  return context;
};
