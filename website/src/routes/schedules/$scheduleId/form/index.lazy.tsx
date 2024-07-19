import { createLazyFileRoute } from "@tanstack/react-router";
import { useSteps } from "@yamada-ui/react";
import { steps } from "./-components/StepperData";
import { Result } from "./-components/result/Result";
import CinemaSeats from "./-components/select_ticket/CinemaSeats";
import { TicketFormModal } from "./-components/select_ticket/TicketFormModal";
import { StepperComponent } from "./-components/StepperComponent"; // 追加されたimport
import { useSeatSelection } from "./-hooks/useSeatSelection";

export const Route = createLazyFileRoute("/schedules/$scheduleId/form/")({
  component: Index,
});

export function Index() {
  const { scheduleId } = Route.useParams();
  const { selectedSeats } = useSeatSelection();

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
        {activeStep === 1 ? (
          <div>
            <CinemaSeats />

            {scheduleId && selectedSeats.length > 0 ? (
              <TicketFormModal scheduleId={scheduleId} />
            ) : null}
          </div>
        ) : activeStep === 2 ? (
          <div>
            <Result />
          </div>
        ) : activeStep === 3 ? (
          <div>
            <h1>購入完了</h1>
          </div>
        ) : null}
      </StepperComponent>
    </div>
  );
}
