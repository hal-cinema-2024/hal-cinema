import { AddOrderModal } from "../components/modal/AddOrderModal";
import { OrderTable } from "../feature/data-table/OrderTable";

export const Orders = () => {
  return (
    <>
      <AddOrderModal />
      <OrderTable />
    </>
  );
};
