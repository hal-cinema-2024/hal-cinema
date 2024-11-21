import { MoviesMock } from "../../../mock/types/movies";
import { DataType, ColumnType } from "./type";

export function createColumns<T extends DataType>(
  instance: DataType
): ColumnType<T>[] {
  type Keys = keyof T;
  return Object.keys(instance).map((key) => ({
    header: key as Keys,
    accessorKey: key as Keys,
  }));
}

export type DataKeys = MoviesMock;

const movie = {} as MoviesMock;

export const DataInstance = {
  Movie: movie,
};
