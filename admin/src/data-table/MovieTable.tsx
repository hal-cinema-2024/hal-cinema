import { Table } from "@yamada-ui/table";
import { useMovies } from "../../../mock/hooks/useMovies";
import { Center } from "@yamada-ui/react";
export const MovieTable = () => {
  const { movies } = useMovies();
  const columns = [
    { header: "Movie ID", accessorKey: "movieId" },
    { header: "Movie Name", accessorKey: "movieName" },
    { header: "Director", accessorKey: "director" },
    { header: "Link", accessorKey: "link" },
    { header: "Term", accessorKey: "term" },
    {
      header: "Edit",
      accessorKey: "edit",
      cell: (info: any) => (
        <a href={`/movies/${info.row.original.movieId}`}>Edit</a>
      ),
    },
  ];

  return (
    <>
      <Center
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Table columns={columns} data={movies} />
      </Center>
    </>
  );
};
