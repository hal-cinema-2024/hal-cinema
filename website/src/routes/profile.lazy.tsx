import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile")({
  component: Index,
});

function Index() {
  return <>top</>;
}
