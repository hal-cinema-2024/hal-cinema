import { createLazyFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Stepper from "./-components/Stepper";
import BuyContent from "./-components/BuyContent";
import CustomerInfo from "./-components/CustomerInfo";
import PaymentInfo from "./-components/PaymentInfo";

export const Route = createLazyFileRoute("/schedules/$scheduleId/reserved")({
  component: Index,
});

function Index() {
  return (
    <ReservedContainer>
      <Stepper />
      <Title>
        <h1>予約内容確認</h1>
        <p>
          以下の内容を確認の上、「決済する」ボタンを押して決済を完了してください。
        </p>
      </Title>

      <BuyContent />

      <CustomerInfo />

      <PaymentInfo />
    </ReservedContainer>
  );
}

const ReservedContainer = styled.div`
  width: 800px;
  margin: 50px auto;
  color: #ffffff;
`;

const Title = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin-bottom: 50px;
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
`;
