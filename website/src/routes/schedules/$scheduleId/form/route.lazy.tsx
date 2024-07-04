import { createLazyFileRoute } from "@tanstack/react-router";
import { StepperComponent } from "./-components/StepperComponent";
import { useSteps } from "@yamada-ui/react";
import { steps } from "./-components/StepperData";
export const Route = createLazyFileRoute("/schedules/$scheduleId/form")({
  component: Index,
});

export function Index() {
  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <div>
      <StepperComponent
        activeStep={activeStep}
        onStepNext={onStepNext}
        onStepPrev={onStepPrev}
      >
        form
      </StepperComponent>
    </div>
  );
}
