import { MoviesMock } from "../../../mock/types";

export interface TableColumnsType {
  header: string;
  accessorKey: string;
}

// 挿入するデータの型を定義
export type DataSourceType = MoviesMock;
