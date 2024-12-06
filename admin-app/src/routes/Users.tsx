import { AddUserModal } from "../components/AddUserModal";
import { UserTable } from "../data-table/UserTable"

export const Users = () => {
  return (
    <>
      <AddUserModal />
      <UserTable />
    </>
  )
}