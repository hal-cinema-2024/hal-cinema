import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/google/callback")({
  component: Index,
});

const query = new URLSearchParams(window.location.search);
const code = query.get("code");
console.log(code);
function Index() {
  return (
    <div>
      <h1>Google Callback</h1>
      <p>code: {code}</p>
    </div>
  );
}
