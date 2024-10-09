import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieTable } from "../../data_table/movie";

export const Route = createLazyFileRoute("/")({
  component: Top,
});

function Top() {
  return (
    <div>
      <MovieTable />
    </div>
  );
}
