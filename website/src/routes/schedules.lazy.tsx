import { createLazyFileRoute } from "@tanstack/react-router";
import Slideshow from "../pages/schedules/Slideshow";
import ScreenTime from "../pages/schedules/ScreenTime";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return (
    <>
      <Slideshow />
      <ScreenTime />
    </>
  );
}
