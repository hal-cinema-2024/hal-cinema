import { createLazyFileRoute } from "@tanstack/react-router";
import { Table } from "../data_table/Table";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Table />
    </div>
  );
}
