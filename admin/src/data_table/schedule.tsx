import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const ScheduleTable = () => {
  const columns = createColumns(DataInstance.Schedule);
  return <Table columns={columns} data={[]} />;
};
