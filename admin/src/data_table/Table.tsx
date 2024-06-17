import "./table.css";
import { flexRender } from "@tanstack/react-table";
import { FC } from "react";
import { Button } from "@nextui-org/react";
import { useTable } from "./hooks/useReactTable";
import { User } from "./component/UserColumn";

interface DataTableProps {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User[]>>;
}

export const DataTable: FC<DataTableProps> = ({ data, setData }) => {
  const { table } = useTable(data, setData);

  return (
    <div>
      <main>
        {/* ----------表示件数絞り込み---------- */}
        <div className="DispNumContainer">
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

          <div>
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
        </div>
        {/* ----------表示件数絞り込み 終わり---------- */}

        {/* ----------検索・日付絞り込み---------- */}
        <div>
          <div className="HeaderWrap">
            <div className="SearchContainer">
              <input
                placeholder="検索"
                value={(table.getState().globalFilter as string) ?? ""}
                onChange={(e) => table.setGlobalFilter(e.target.value)}
              />
            </div>
            <div className="NarrowContainer">
              <input
                style={{ marginRight: "5px" }}
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
                style={{ marginLeft: "5px" }}
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
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={table.getAllColumns().length} className="noData">
                  データが見つかりません
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      <p>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </p>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div style={{ padding: "10px" }} />
      </main>
    </div>
  );
};
