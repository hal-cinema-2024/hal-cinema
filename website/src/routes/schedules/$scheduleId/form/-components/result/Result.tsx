import styled from "styled-components";
import BuyContent from "./BuyContent";
import PaymentInfo from "./PaymentInfo";
import { useOrderByUser } from "../../../../../../../../mock/hooks/useOrderByUser";

export function Result() {
  const { orders } = useOrderByUser("1");

  return (
    <ReservedContainer>
      <Title>
        <h1>予約内容確認</h1>
        <p>
          以下の内容を確認の上、「決済する」ボタンを押して決済を完了してください。
        </p>
      </Title>
      {orders && <BuyContent order={orders} />}
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
