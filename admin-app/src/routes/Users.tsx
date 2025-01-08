import { AddUserModal } from "../components/modal/AddUserModal";
import { UserTable } from "../feature/data-table/UserTable";

export const Users = () => {
  return (
    <>
      <AddUserModal />
      <UserTable />
    </>
  );
};
