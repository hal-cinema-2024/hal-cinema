import { Stepper, VStack, HStack, Button } from "@yamada-ui/react";
import { steps } from "./StepperData";

type StepperComponentProps = {
  children: React.ReactNode;
  activeStep: number;
  onStepNext: () => void;
  onStepPrev: () => void;
};
export const StepperComponent = (props: StepperComponentProps) => {
  const { children, activeStep, onStepNext, onStepPrev } = props;

  return (
    <VStack>
      <Stepper index={activeStep} steps={steps} />

      {children}
      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </VStack>
  );
};
