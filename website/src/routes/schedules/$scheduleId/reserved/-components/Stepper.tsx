import React from "react";
import styled from "styled-components";
import {
  Stepper as YamadaStepper,
  Step,
  StepTitle,
  StepSeparator,
  StepStatus,
  useSteps,
  VStack,
  HStack,
  Button,
  Box,
  // Flex,
} from "@yamada-ui/react";
import "./Stepper.css";

type Step = {
  title: string;
};

const steps: Step[] = [
  { title: "座席・チケット選択" },
  { title: "購入情報の購入" },
  { title: "購入内容の確認" },
  { title: "お支払い" },
  { title: "予約完了" },
];

const Stepper: React.FC = () => {
  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <VStack>
      <YamadaStepper size="md" index={activeStep}>
        {steps.map(({ title }, index) => (
          <Step key={index}>
            <div className="StepperContainer">
              <div className="StepperStatus">
                <StepStatus />
                <CustomeStepSeparator />
                {/* <div className="StepSeparator" /> */}
              </div>
              <Box flexShrink="0" mt={2}>
                <StepTitle>{title}</StepTitle>
              </Box>
            </div>
          </Step>
        ))}
      </YamadaStepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </VStack>
  );
};

export default Stepper;

const CustomeStepSeparator = styled(StepSeparator)`
  width: 120px !important;
`;
