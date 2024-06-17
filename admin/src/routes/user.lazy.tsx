import { createLazyFileRoute } from "@tanstack/react-router";
import { DataTable } from "../data_table/Table";
import useUserData from "../data_table/hooks/useUserData";

export const Route = createLazyFileRoute("/user")({
  component: Index,
});

function Index() {
  const { data, setData } = useUserData();

  return (
    <div>
      <DataTable data={data} setData={setData} />
    </div>
  );
}
