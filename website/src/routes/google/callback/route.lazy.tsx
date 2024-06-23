import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/google/callback")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Google Callback</h1>
    </div>
  );
}
