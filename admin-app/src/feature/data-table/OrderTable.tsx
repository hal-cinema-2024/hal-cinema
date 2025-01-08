import { useNavigate } from "react-router";
import { Table } from "@yamada-ui/table";
import { deleteSchedule } from "../schedule/api";
import { useOrders } from "../../../../mock/hooks/useOrders";
import { Button } from "@yamada-ui/react";
export const OrderTable = () => {
  const { orders } = useOrders("1");
  const router = useNavigate();
  const column = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "映画ID",
      accessorKey: "movieId",
    },
    {
      header: "スクリーン",
      accessorKey: "screen",
    },
    {
      header: "予約内容",
      accessorKey: "orderDetail",
    },

    {
      header: "Edit",
      accessorKey: "edit",
      //eslint-disable-next-line
      cell: (info: any) => (
        <Button
          style={{
            width: "60%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#a9ffcd",
          }}
          onClick={() => {
            router(`/schedules/${info.row.original.id}`);
          }}
        >
          詳細/編集
        </Button>
      ),
    },
    {
      header: "Delete",
      accessorKey: "delete",
      //eslint-disable-next-line
      cell: (info: any) => (
        <Button
          style={{
            width: "50%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#ffa9a9",
          }}
          onClick={() => {
            deleteSchedule(info.row.original.id);
            window.location.reload();
          }}
        >
          削除
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table data={orders} columns={column} />
    </>
  );
};