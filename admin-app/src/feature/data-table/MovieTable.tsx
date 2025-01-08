import { Button, Center } from "@yamada-ui/react";
import { Table } from "@yamada-ui/table";
import { useNavigate } from "react-router";
import { deleteMovie } from "../movie/api";
import { useMovies } from "../../../../mock/hooks/useMovies";
export const MovieTable = () => {
  const { movies } = useMovies();

  const router = useNavigate();
  const columns = [
    { header: "Movie ID", accessorKey: "id" },
    { header: "Movie Name", accessorKey: "movieName" },
    { header: "Director", accessorKey: "director" },
    { header: "Link", accessorKey: "link" },
    { header: "Term", accessorKey: "term" },
    {
      header: "Edit",
      accessorKey: "edit",
      //eslint-disable-next-line
      cell: (info: any) => (
        <Button
          style={{
            width: "60%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#a9ffcd",
          }}
          onClick={() => {
            router(`/movies/${info.row.original.id}`);
          }}
        >
          詳細/編集
        </Button>
      ),
    },
    {
      header: "Delete",
      accessorKey: "delete",
      //eslint-disable-next-line
      cell: (info: any) => (
        <Button
          style={{
            width: "50%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#ffa9a9",
          }}
          onClick={() => {
            deleteMovie(info.row.original.id);
            window.location.reload();
          }}
        >
          削除
        </Button>
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
          padding: "0 50px",
          boxSizing: "border-box",
        }}
      >
        <Table columns={columns} data={movies} />
      </Center>
    </>
  );
};
