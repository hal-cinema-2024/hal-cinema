import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
// import { User, columns } from "../component/UserColumn";
import { useReactTable } from "@tanstack/react-table";
import { Movie, columns } from "../component/MovieColumn";

export const useTable = (
  data: Movie[],
  setData: React.Dispatch<React.SetStateAction<Movie[]>>
) => {
  const initialPageIndex = 0;
  const initialPageSize = 10;

  const table = useReactTable<Movie>({
    columns,
    data,
    initialState: {
      pagination: {
        pageIndex: initialPageIndex,
        pageSize: initialPageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return {
    table,
    data,
    setData,
  };
};
