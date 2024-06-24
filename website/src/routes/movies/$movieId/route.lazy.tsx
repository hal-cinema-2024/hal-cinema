import { createLazyFileRoute } from "@tanstack/react-router";
import Movie from "./components/movie";

export const Route = createLazyFileRoute("/movies/$movieId")({
  component: Index,
});

function Index() {
  return <Movie />;
}
