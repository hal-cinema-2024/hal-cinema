import { createLazyFileRoute } from "@tanstack/react-router";
import CinemaSeats from "../form/seat_form/cinemaSeats";

export const Route = createLazyFileRoute("/demo")({
  component: Index,
});

function Index() {
  return (
    <>
      <CinemaSeats />
    </>
  );
}
