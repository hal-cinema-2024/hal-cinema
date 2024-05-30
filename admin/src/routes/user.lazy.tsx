import { createLazyFileRoute } from "@tanstack/react-router";
import { DataTable } from "../data_table/Table";

export const Route = createLazyFileRoute("/user")({
  component: Index,
});

function Index() {
  return (
    <div>
      <DataTable />
    </div>
  );
}
