import { createLazyFileRoute } from "@tanstack/react-router";
import Movie from "../../../pages/movie/movie";

export const Route = createLazyFileRoute("/movies/$movieId")({
  component: Index,
});

function Index() {
  return <Movie />;
}
