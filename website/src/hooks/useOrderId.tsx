import { useContext } from "react";
import { OrderIdContext } from "../routes/schedules/$scheduleId/form/-store/OrderIdContext";
export const useOrderId = () => {
  const context = useContext(OrderIdContext);
  if (context === undefined) {
    throw new Error("useScheduleId must be used within a OrderIdProvider");
  }
  return context;
};
