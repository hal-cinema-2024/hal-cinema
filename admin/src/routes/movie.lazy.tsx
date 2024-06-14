import { createLazyFileRoute } from "@tanstack/react-router";
// import { DataTable } from "../data_table/Table";

export const Route = createLazyFileRoute("/movie")({
  component: Index,
});

function Index() {
  return (
    <div>
      aaaa
      {/* <DataTable /> */}
    </div>
  );
}
