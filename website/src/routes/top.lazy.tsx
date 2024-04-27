import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/top")({
  component: Index,
});

function Index() {
  return <>top</>;
}
