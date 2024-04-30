import { createLazyFileRoute } from "@tanstack/react-router";
import CinemaSeats from "../form/seat_form/cinemaSeats";
import { SeatSelectionProvider } from "../form/seat_form/SeatSelectionContext";

export const Route = createLazyFileRoute("/demo")({
  component: Index,
});

function Index() {
  return (
    <>
      <SeatSelectionProvider>
        <CinemaSeats />
      </SeatSelectionProvider>
    </>
  );
}
