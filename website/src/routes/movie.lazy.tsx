import { createLazyFileRoute } from "@tanstack/react-router";
import Movie from "../pages/movie/movie";
import { PvSlideshow } from "../pages/movie/PvSlideshow";
import { videoIds } from "../pages/movie/youtubeIds";

export const Route = createLazyFileRoute("/movie")({
  component: Index,
});

function Index() {
  return (
    <>
      <Movie />
      <PvSlideshow MovieIds={videoIds} />
    </>
  );
}
