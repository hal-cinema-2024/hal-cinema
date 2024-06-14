import { Column, ColumnDef, SortDirection } from "@tanstack/react-table";
// import { format, parse } from "date-fns";
// import { ja } from "date-fns/locale/ja";
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
  releaseDate: string;
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
    accessorKey: "lastName",
    header: "映画タイトル",
  },
  {
    accessorKey: "firstName",
    header: "上映開始日",
  },
  {
    accessorKey: "email",
    header: "上映終了日",
  },
  // {
  //   accessorKey: "createdAt",
  //   header: sortableHeader("登録日時(UNIX)"),
  //   cell: ({ row }) => {
  //     const user = row.original;
  //     return format(new Date(user.createdAt), "yyyy/MM/dd HH:mm", {
  //       locale: ja,
  //     });
  //   },
  //   filterFn: (row, _, filterValue) => {
  //     const { from, to } = filterValue as { from?: string; to?: string };
  //     const createdAt = row?.original?.createdAt;

  //     return (
  //       (!from ||
  //         parse(from, "yyyy-MM-dd", new Date()).getTime() <= createdAt) &&
  //       (!to || createdAt <= parse(to, "yyyy-MM-dd", new Date()).getTime())
  //     );
  //   },
  //   enableGlobalFilter: false,
  // },
];
