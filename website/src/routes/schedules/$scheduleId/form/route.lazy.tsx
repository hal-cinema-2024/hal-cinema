import { createLazyFileRoute } from "@tanstack/react-router";
import { StepperComponent } from "./-components/StepperComponent";
export const Route = createLazyFileRoute("/schedules/$scheduleId/form")({
  component: Index,
});

export function Index() {
  return (
    <div>
      <StepperComponent>form</StepperComponent>
    </div>
  );
}
