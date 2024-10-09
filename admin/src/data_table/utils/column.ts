import { DataType, ColumnType } from "../types";

export function createColumns<T extends DataType>(
  instance: DataType
): ColumnType<T>[] {
  type Keys = keyof T;
  return Object.keys(instance).map((key) => ({
    header: key as Keys,
    accessorKey: key as Keys,
  }));
}
