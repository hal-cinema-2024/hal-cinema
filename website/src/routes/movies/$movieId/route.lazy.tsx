import { createLazyFileRoute } from "@tanstack/react-router";
import Movie from "../component/Movies";

export const Route = createLazyFileRoute("/movies/$movieId")({
  component: Index,
});

function Index() {
  return <Movie />;
}
