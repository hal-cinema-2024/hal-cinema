import { MoviesMock } from "../../../mock/types/movies";

export type DataType = MoviesMock;
export type ColumnType<T extends DataType> = {
  header: keyof T;
  accessorKey: keyof T;
};

export function createColumns<T extends DataType>(columns: ColumnType<T>[]) {
  return columns.map((column) => {
    return {
      header: column.header,
      accessorKey: column.accessorKey,
    };
  });
}
