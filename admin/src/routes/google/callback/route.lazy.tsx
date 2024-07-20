import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/google/callback")({
  component: function Page() {
    return (
      <div>
        <h1>Google Callback</h1>
      </div>
    );
  },
});
