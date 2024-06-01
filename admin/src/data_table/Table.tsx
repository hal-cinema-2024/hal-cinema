import "./table.css";

import { flexRender } from "@tanstack/react-table";
import { FC } from "react";

import { Button, Input } from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
import { useTable } from "./hooks/useReactTable";

export const DataTable: FC = () => {
  const { table } = useTable();
  return (
    <div>
      <main style={{ width: "1000px" }}>
        {/* ----------表示件数絞り込み---------- */}
        <div className="DispNumContainer">
          <select
            style={{
              margin: "5px",
              cursor: "pointer",
            }}
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
        {/* ----------表示件数絞り込み 終わり---------- */}

        {/* ----------検索・日付絞り込み---------- */}
        <div style={{ padding: "10px" }}>
          <Input
            placeholder="検索"
            value={(table.getState().globalFilter as string) ?? ""}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
          />
          <div className="SearchContainer">
            <input
              placeholder="検索"
              value={(table.getState().globalFilter as string) ?? ""}
              onChange={(e) => table.setGlobalFilter(e.target.value)}
            />
          </div>
          <div className="NarrowContainer">
            <input
              type="date"
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
            〜
            <input
              type="date"
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
        {/* ----------検索・日付絞り込み 終わり---------- */}

        {/* ----------テーブル---------- */}
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
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
      </main>
    </div>
  );
};
