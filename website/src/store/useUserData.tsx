import { useContext } from "react";
import { UserIdContext } from "./useUserIdContext";

export const useUserData = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error(
      "useSeatSelection must be used within a SeatSelectionProvider"
    );
  }
  return context;
};
