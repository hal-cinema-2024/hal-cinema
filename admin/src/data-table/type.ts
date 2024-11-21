import { MoviesMock } from "../../../mock/types/movies";

export type DataType = MoviesMock;
export type ColumnType<T extends DataType> = {
  header: keyof T;
  accessorKey: keyof T;
};
