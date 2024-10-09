import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const UserTable = () => {
  const columns = createColumns(DataInstance.User);
  return <Table columns={columns} data={[]} />;
};
