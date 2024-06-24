import { createLazyFileRoute } from "@tanstack/react-router";
import { StepperComponent } from "./components/StepperComponent";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

export function Index() {
  return (
    <div>
      <StepperComponent>form</StepperComponent>
    </div>
  );
}
