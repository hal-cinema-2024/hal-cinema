import { createLazyFileRoute } from "@tanstack/react-router";
import Slideshow from "../pages/schedules/Slideshow";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return (
    <>
      <Slideshow />
    </>
  );
}
