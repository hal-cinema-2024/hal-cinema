import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/movie")({
  component: Index,
});

function Index() {
  return <>top</>;
}
