import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile/edit")({
  component: Index,
});

function Index() {
  return <div>プロフィール編集</div>;
}
