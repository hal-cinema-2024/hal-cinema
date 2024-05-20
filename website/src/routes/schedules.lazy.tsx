import { createLazyFileRoute } from "@tanstack/react-router";
import Slideshow from "../pages/schedules/Slideshow";
// import ScreenTime from "../pages/schedules/ScreenTime";
import MovieBox from "../pages/schedules/MovieBox";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return (
    <>
      <Slideshow />
      {/* <ScreenTime /> */}
      <MovieBox />
    </>
  );
}
