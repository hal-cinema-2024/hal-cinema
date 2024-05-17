import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/movies")({
  component: Index,
});

function Index() {
  return <>top</>;
}
