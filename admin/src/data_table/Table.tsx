import "./style.css";

import { flexRender } from "@tanstack/react-table";
import { FC } from "react";

import { Button, Input } from "@nextui-org/react";
import { useTable } from "./hooks/useReactTable";

export const DataTable: FC = () => {
  const { table } = useTable();
  return (
    <div>
      <div className="narrowWrap">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              表示数 {pageSize}
            </option>
          ))}
        </select>

        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        {table.getPageOptions().map((page) => {
          return (
            <button
              key={page}
              onClick={() => table.setPageIndex(page)}
              disabled={table.getState().pagination.pageIndex === page}
            >
              {page + 1}
            </button>
          );
        })}
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </div>
      <div className="serchWrap">
        <Input
          className="searchInput"
          placeholder='検索'
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
        />
        <div className="dateInput">
          <Input
            type='date'
            value={
              (
                table.getColumn("createdAt")?.getFilterValue() as {
                  from?: string;
                }
              )?.from ?? ""
            }
            onChange={(e) =>
              table
                .getColumn("createdAt")
                ?.setFilterValue((old: { from?: string; to?: string }) => {
                  return {
                    ...old,
                    from: e.target.value,
                  };
                })
            }
          />
          <p>～</p>
          <Input
            type='date'
            value={
              (
                table.getColumn("createdAt")?.getFilterValue() as {
                  to?: string;
                }
              )?.to ?? ""
            }
            onChange={(e) =>
              table
                .getColumn("createdAt")
                ?.setFilterValue((old: { from?: string; to?: string }) => {
                  return {
                    ...old,
                    to: e.target.value,
                  };
                })
            }
          />
        </div>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="special-row" key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ padding: "10px" }} />
    </div>
  );
};
