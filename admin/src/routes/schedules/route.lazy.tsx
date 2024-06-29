import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return <div> q</div>;
}
