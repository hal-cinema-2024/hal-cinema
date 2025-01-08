import { Button, Center } from "@yamada-ui/react";
import { Table } from "@yamada-ui/table";
import { useNavigate } from "react-router";
import { deleteUser } from "../user/api";
import { useUsers } from "../../../../mock/hooks/useUsers";
export const UserTable = () => {
  const { users } = useUsers();

  const router = useNavigate();
  const columns = [
    { header: "User ID", accessorKey: "id" },
    { header: "Last Name", accessorKey: "lastName" },
    { header: "First Name", accessorKey: "firstName" },
    { header: "Gender", accessorKey: "gender" },
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
            router(`/users/${info.row.original.id}`);
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
            deleteUser(info.row.original.id);
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
      <Center
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          padding: "0 50px",
          boxSizing: "border-box",
        }}
      >
        <Table columns={columns} data={users} />
      </Center>
    </>
  );
};
