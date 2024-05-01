import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/register")({
  component: Index,
});

function Index() {
  return <div>register</div>;
}
