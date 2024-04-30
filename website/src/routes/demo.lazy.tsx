import { createLazyFileRoute } from "@tanstack/react-router";
import CinemaSeats from "../seat_selector/cinemaSeats";

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
