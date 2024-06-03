import { Stepper, useSteps, VStack, HStack, Button } from "@yamada-ui/react";
type Steps = {
  title: string;
};
const steps: Steps[] = [
  { title: "座席・チケット選択" },
  { title: "購入情報入力" },
  { title: "購入内容確認" },
  { title: "お支払い" },
  { title: "購入完了" },
];

export const StepperComponent = () => {
  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <VStack>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </VStack>
  );
};
