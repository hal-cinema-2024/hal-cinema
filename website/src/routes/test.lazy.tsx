import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/test")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}
