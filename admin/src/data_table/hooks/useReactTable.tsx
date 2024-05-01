import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { User, columns } from "../column";
import { useReactTable } from "@tanstack/react-table";
import { getData } from "../mock/data";
import { useState, useEffect } from "react";
export const useTable = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await getData());
    };
    fetchData();
  }, []);
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
