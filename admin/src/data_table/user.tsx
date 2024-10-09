import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const user = () => {
  const columns = createColumns(DataInstance.User);
  //data ダミー
  return <Table columns={columns} data={DataInstance.User} />;
};
