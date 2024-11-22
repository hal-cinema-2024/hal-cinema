import { Table } from "@yamada-ui/table";
import { useMovies } from "../../../mock/hooks/useMovies";
import { Button, Center } from "@yamada-ui/react";
import { useNavigate } from "react-router";
const TableComponents = () => {
  const { movies } = useMovies();

  const router = useNavigate();
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
        <Button
          style={{
            width: "45%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#a9ffcd",
          }}
          onClick={() => {
            router(`/movies/${info.row.original.movieId}`);
          }}
        >
          編集
        </Button>
      ),
    },
    {
      header: "Delete",
      accessorKey: "delete",
      cell: (info: any) => (
        <Button
          style={{
            width: "45%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#ffa9a9",
          }}
          onClick={() => {
            console.log("delete", info.row.original.movieId);
          }}
        >
          削除
        </Button>
      ),
    },
  ];

  return (
    <>
      <Button
        onClick={() => {
          router("/movies/new");
        }}
      >
        追加
      </Button>
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

export const MovieTable = () => {
  return (
    <>
      <TableComponents />
    </>
  );
};
