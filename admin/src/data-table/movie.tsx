import { Table } from "@yamada-ui/table";
import { createColumns, DataInstance } from "./util";
import { useMovies } from "../../../mock/hooks/useMovies";
export const MovieTable = () => {
  const { movies } = useMovies("1", "10");
  const columns = createColumns(DataInstance.Movie);

  return <Table columns={columns} data={movies} />;
};
