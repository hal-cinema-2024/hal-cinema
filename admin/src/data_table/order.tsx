import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const OrderTable = () => {
  const columns = createColumns(DataInstance.Orders);
  return <Table columns={columns} data={[]} />;
};
