import { createLazyFileRoute } from "@tanstack/react-router";
import Movie from "../pages/movie/movie";
import { PvSlide } from "../pages/movie/PvSlideshow";
import { videoIds } from "../pages/movie/youtubeIds";

export const Route = createLazyFileRoute("/movie")({
  component: Index,
});

function Index() {
  // here?
  return (
    <>
      <Movie />
      <PvSlide MovieId={videoIds} />
    </>
  );
}
