import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieFormProvider } from "../form/movie_form/movieFormProvider";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <MovieFormProvider />;
}
