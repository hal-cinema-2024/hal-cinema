import { createLazyFileRoute } from "@tanstack/react-router";
import Movies from "../pages/movies/Movies";

export const Route = createLazyFileRoute("/movies")({
  component: Index,
});

function Index() {
  return (
    <>
      <Movies />
    </>
  );
}
