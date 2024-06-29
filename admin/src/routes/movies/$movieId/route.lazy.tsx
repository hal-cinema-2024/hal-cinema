import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/movies/$movieId")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Movie</h1>
    </div>
  );
}
