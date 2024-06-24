import { createLazyFileRoute } from "@tanstack/react-router";
import { useGetParams } from "../../../hooks/useGetParams";

export const Route = createLazyFileRoute("/google/callback")({
  component: function Page() {
    const { url } = useGetParams();
    return (
      <div>
        <h1>Google Callback</h1>

        {url && <p>Result: {url}</p>}
      </div>
    );
  },
});
