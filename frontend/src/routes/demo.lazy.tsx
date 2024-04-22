import { createLazyFileRoute } from "@tanstack/react-router";
import { DemoFormProvider } from "../demo/DemoFormProvider";

export const Route = createLazyFileRoute("/demo")({
  component: Index,
});

function Index() {
  return (
    <div>
      <DemoFormProvider />
    </div>
  );
}
