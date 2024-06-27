import { createLazyFileRoute } from "@tanstack/react-router";
import Seats from "../pages/seats/seats";

export const Route = createLazyFileRoute("/seats")({
  component: Index,
});

function Index() {
  return <Seats />;
}
