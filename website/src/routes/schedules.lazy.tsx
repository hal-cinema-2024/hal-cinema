import { createLazyFileRoute } from "@tanstack/react-router";
import Slideshow from "../pages/schedules/Slideshow";
import MovieBox from "../pages/schedules/MovieBox";
import { InfoList } from "../pages/schedules/TimeData";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return (
    <>
      <Slideshow />
      <MovieBox infoList={InfoList} />
    </>
  );
}
