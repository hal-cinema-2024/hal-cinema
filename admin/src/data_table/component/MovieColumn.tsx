import { Column, ColumnDef, SortDirection } from "@tanstack/react-table";
import { format, parse } from "date-fns";
import { ja } from "date-fns/locale/ja";
import { JSX } from "react";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
  TiEdit,
} from "react-icons/ti";

export type Movie = {
  id: string;
  movieName: string;
  // releaseDate: string;
  releaseDate: number;
  endDate: string;
  //createdAt: number; // UNIX timestamp（ミリ秒）
};

const getSortIcon = (sortDirection: false | SortDirection): JSX.Element => {
  switch (sortDirection) {
    case "asc":
      return <TiArrowSortedUp />;
    case "desc":
      return <TiArrowSortedDown />;
    default:
      return <TiArrowUnsorted />;
  }
};

const sortableHeader =
  (headerName: string) =>
  ({ column }: { column: Column<Movie, unknown> }): JSX.Element => {
    return (
      <div
        style={{ flex: "auto", alignItems: "center", cursor: "pointer" }}
        onClick={column.getToggleSortingHandler()}
      >
        {headerName}
        {getSortIcon(column.getIsSorted())}
      </div>
    );
  };

export const columns: ColumnDef<Movie>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div
          style={{ cursor: "pointer" }}
          onClick={() =>
            alert(
              `${user.id}:${user.movieName}の編集ボタンがクリックされました。`
            )
          }
        >
          <TiEdit />
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: sortableHeader("MovieID"),
  },
  {
    accessorKey: "movieName",
    header: "映画タイトル",
  },
  {
    accessorKey: "releaseDate",
    header: sortableHeader("上映開始日"),
    cell: ({ row }) => {
      const movie = row.original;
      return format(new Date(movie.releaseDate), "yyyy/MM/dd", {
        locale: ja,
      });
    },
    filterFn: (row, _, filterValue) => {
      const { from, to } = filterValue as { from?: string; to?: string };
      const releaseDate = row?.original?.releaseDate;

      return (
        (!from ||
          parse(from, "yyyy-MM-dd", new Date()).getTime() <= releaseDate) &&
        (!to || releaseDate <= parse(to, "yyyy-MM-dd", new Date()).getTime())
      );
    },
    enableGlobalFilter: false,
  },
  // {
  //   accessorKey: "releaseDate",
  //   header: "上映開始日",
  // },
  {
    accessorKey: "endDate",
    header: "上映終了日",
  },
];
