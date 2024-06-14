import { createLazyFileRoute } from "@tanstack/react-router";
import { DataTable } from "../data_table/MovieTable";
import useMovieData from "../data_table/hooks/useMovieData";

export const Route = createLazyFileRoute("/movie")({
  component: Index,
});

function Index() {
  const { data, setData } = useMovieData();

  return (
    <div>
      aaaa
      <DataTable data={data} setData={setData} />
    </div>
  );
}
