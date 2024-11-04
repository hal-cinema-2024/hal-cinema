import { Table } from "@yamada-ui/table";

import type { DataSourceType, TableColumnsType } from "./type";

type PropsType = {
  tableColumns: TableColumnsType[];
  data: DataSourceType[];
  pagination?: false | undefined;
};

export const DataTable: React.FC<PropsType> = (props) => {
  const { tableColumns, data } = props;
  return <Table columns={tableColumns} data={data} />;
};
