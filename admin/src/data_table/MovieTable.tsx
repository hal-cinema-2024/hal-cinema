import "./table.css";
import { flexRender } from "@tanstack/react-table";
import { FC } from "react";
import { Button } from "@nextui-org/react";
import { useTable } from "./hooks/movieReactTable";
import { Movie } from "./component/MovieColumn";

interface DataTableProps {
  data: Movie[];
  setData: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const DataTable: FC<DataTableProps> = ({ data, setData }) => {
  const { table } = useTable(data, setData);

  return (
    <div>
      <main>
        {/* ----------陦ｨ遉ｺ莉ｶ謨ｰ邨槭ｊ霎ｼ縺ｿ---------- */}
        <div className="DispNumContainer">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                陦ｨ遉ｺ謨ｰ {pageSize}
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
        {/* ----------陦ｨ遉ｺ莉ｶ謨ｰ邨槭ｊ霎ｼ縺ｿ 邨ゅｏ繧�---------- */}

        {/* ----------讀懃ｴ｢繝ｻ譌･莉倡ｵ槭ｊ霎ｼ縺ｿ---------- */}
        <div>
          <div className="HeaderWrap">
            <div className="SearchContainer">
              <input
                placeholder="讀懃ｴ｢"
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
                    table.getColumn("releaseDate")?.getFilterValue() as {
                      from?: string;
                    }
                  )?.from ?? ""
                }
                onChange={(e) =>
                  table
                    .getColumn("releaseDate")
                    ?.setFilterValue((old: { from?: string; to?: string }) => {
                      return {
                        ...old,
                        from: e.target.value,
                      };
                    })
                }
              />
              縲�
              <input
                style={{ marginLeft: "5px" }}
                type="date"
                value={
                  (
                    table.getColumn("endDate")?.getFilterValue() as {
                      to?: string;
                    }
                  )?.to ?? ""
                }
                onChange={(e) =>
                  table
                    .getColumn("endDate")
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
        {/* ----------讀懃ｴ｢繝ｻ譌･莉倡ｵ槭ｊ霎ｼ縺ｿ 邨ゅｏ繧�---------- */}

        {/* ----------繝�繝ｼ繝悶Ν---------- */}
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
                  繝�繝ｼ繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ
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
