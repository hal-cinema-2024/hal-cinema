import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginSuccess } from "./-components/LoginSuccess";
import { useGetParams } from "../../../hooks/useGetParams";
import { useUserId } from "../../../hooks/useUserId";
export const Route = createLazyFileRoute("/google/callback/")({
  component: Index,
});

function Index() {
  const { setUserId } = useUserId();
  const { url } = useGetParams();
  console.log(url);
  if (url) {
    setUserId(url);
  }

  return (
    <div>
      <LoginSuccess />
    </div>
  );
}
