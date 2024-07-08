import { useContext } from "react";
import { UserIdContext } from "../store/useUserIdContext";

export const useUserId = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error(
      "useSeatSelection must be used within a SeatSelectionProvider"
    );
  }
  return context;
};
