import { createLazyFileRoute } from "@tanstack/react-router";
import { StepperComponent } from "./-components/StepperComponent";
import { useSteps } from "@yamada-ui/react";
import { steps } from "./-components/StepperData";
import { Result } from "./-components/result/Result";
import CinemaSeats from "./-components/select_ticket/CinemaSeats";
import { TicketFormModal } from "./-components/select_ticket/TicketFormModal";
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
        {activeStep === 0 ? (
          <div>
            <CinemaSeats />
            <TicketFormModal />
          </div>
        ) : activeStep === 1 ? (
          <div>
            <Result />
          </div>
        ) : activeStep === 4 ? (
          <div>
            <h1>購入完了</h1>
          </div>
        ) : null}
      </StepperComponent>
    </div>
  );
}
