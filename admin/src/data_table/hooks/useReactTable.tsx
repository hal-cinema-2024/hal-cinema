import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { User, columns } from "../column";
import { useReactTable } from "@tanstack/react-table";

export const useTable = (
  data: User[],
  setData: React.Dispatch<React.SetStateAction<User[]>>
) => {
  const initialPageIndex = 0;
  const initialPageSize = 10;

  const table = useReactTable<User>({
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
