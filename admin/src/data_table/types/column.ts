import type { DataType } from "./data";
export type ColumnType<T extends DataType> = {
  header: keyof T;
  accessorKey: keyof T;
};
