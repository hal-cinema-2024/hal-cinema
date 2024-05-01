import { useTable } from "./hooks/useReactTable";

export const QueryTable = () => {
  const { table } = useTable();
  return (
    <table>
      <tbody>
        <tr>
          <td>PaginationState</td>
          <td>{JSON.stringify(table.getState().pagination)}</td>
        </tr>
        <tr>
          <td>SortingState</td>
          <td>{JSON.stringify(table.getState().sorting)}</td>
        </tr>
        <tr>
          <td>FiltersState</td>
          <td>{JSON.stringify(table.getState().columnFilters)}</td>
        </tr>
        <tr>
          <td>GlobalFilterState</td>
          <td>{JSON.stringify(table.getState().globalFilter)}</td>
        </tr>
      </tbody>
    </table>
  );
};
