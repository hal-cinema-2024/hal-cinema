import { Table } from "@yamada-ui/table";
import { useMovies } from "../../../mock/hooks/useMovies";

export const MovieTable = () => {
  const { movies } = useMovies();
  const columns = [
    { header: "Movie ID", accessorKey: "movieId" },
    { header: "Movie Name", accessorKey: "movieName" },
    { header: "Director", accessorKey: "director" },
    { header: "Link", accessorKey: "link" },
    { header: "Term", accessorKey: "term" },
  ];

  return <Table columns={columns} data={movies} />;
};
