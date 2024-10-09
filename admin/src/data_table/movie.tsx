import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const MovieTable = () => {
  const columns = createColumns(DataInstance.Movie);
  return <Table columns={columns} data={[]} />;
};
